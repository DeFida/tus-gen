import { Palette } from "./classes/palette.js";
let palettes;
let generatedPalettes = [];
palettes = [{ name: 'Neon Nightlife', colors: ['#00FFFF', '#FF00FF', '#FFFF00', '#00FF00'] },
    { name: 'Retro Futurism', colors: ['#FDFD96', '#AEC6CF', '#FF6B6B', '#7D9BA3'] },
    { name: 'Electric Shock', colors: ['#F93A2F', '#FFC947', '#00CCFF', '#00FF99'] },
    { name: 'Earth Tones', colors: ['#946847', '#B4975A', '#D1A05F', '#E7C89D'] },
    { name: 'Pastel Paradise', colors: ['#FCDFFF', '#C3FDB8', '#FFE1C3', '#B8C3F1'] },
    { name: 'Oceanic Blues', colors: ['#003459', '#007EA7', '#00A8E8', '#C1E8ED'] },
    { name: 'Bold & Bright', colors: ['#FF5733', '#FFC300', '#DAF7A6', '#6F4E37'] },
    { name: 'Dark & Moody', colors: ['#2C3E50', '#E74C3C', '#ECF0F1', '#95A5A6'] },
    { name: 'Soft & Subtle', colors: ['#F7FFF7', '#D6E7E0', '#BAC5B5', '#91A6A1'] },
    { name: 'Pink & Gold', colors: ['#F9AFAF', '#F7D08A', '#F7F77E', '#FECE7D'] },
    { name: 'Black & White', colors: ['#000000', '#FFFFFF'] }];
let palette = new Palette(palettes[Math.floor(Math.random() * palettes.length)]);
palette.render();
generatedPalettes.push(palette);
let isLast = true;
let currentPalette = 0;
console.log("currpal: ", currentPalette, "| length: ", generatedPalettes.length);
const artqaButton = document.querySelector('#artqa');
const algaButton = document.querySelector('#alga');
const exportButton = document.querySelector('#export');
const saqtauButton = document.querySelector('#saqtau');
let randomPalette = () => {
    let rand = Math.floor(Math.random() * palettes.length);
    if (generatedPalettes[currentPalette].getName() === palettes[rand].name) {
        while (generatedPalettes[currentPalette].getName() === palettes[rand].name) {
            rand = Math.floor(Math.random() * (palettes.length - 1));
        }
    }
    return rand;
};
document.addEventListener('keypress', (e) => {
    if (e.key === ' ') {
        artqaButton.classList.remove('buttons_button_inactive');
        algaButton.classList.add('buttons_button_inactive');
        palette = new Palette(palettes[randomPalette()]);
        if (!isLast) {
            generatedPalettes = generatedPalettes.slice(0, currentPalette);
        }
        currentPalette += 1;
        palette.render();
        generatedPalettes.push(palette);
    }
});
artqaButton.addEventListener('click', () => {
    if (currentPalette > 0) {
        currentPalette -= 1;
    }
    artqaButton.blur();
    if (currentPalette > 0) {
        artqaButton.classList.remove('buttons_button_inactive');
        algaButton.classList.remove('buttons_button_inactive');
        generatedPalettes[currentPalette].render();
    }
    else if (currentPalette === 0) {
        artqaButton.classList.add('buttons_button_inactive');
        algaButton.classList.remove('buttons_button_inactive');
        generatedPalettes[currentPalette].render();
    }
    else {
        artqaButton.classList.add('buttons_button_inactive');
    }
});
algaButton.addEventListener('click', () => {
    if (currentPalette < generatedPalettes.length - 1) {
        currentPalette += 1;
    }
    algaButton.blur();
    if (currentPalette < generatedPalettes.length - 1) {
        algaButton.classList.remove('buttons_button_inactive');
        artqaButton.classList.remove('buttons_button_inactive');
        generatedPalettes[currentPalette].render();
    }
    else if (currentPalette === generatedPalettes.length - 1) {
        isLast = true;
        algaButton.classList.add('buttons_button_inactive');
        artqaButton.classList.remove('buttons_button_inactive');
        generatedPalettes[currentPalette].render();
    }
    else {
        isLast = true;
        algaButton.classList.add('buttons_button_inactive');
    }
});
