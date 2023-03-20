export class Palette {
    constructor(data) {
        this.paletteName = data.name;
        this.colors = data.colors;
    }
    getName() {
        return this.paletteName;
    }
    render() {
        const container = document.querySelector('.colors');
        container.innerHTML = '';
        this.colors.forEach((color) => {
            container.innerHTML += `
            <div class="color">
                <div class="color__display" style="background-color: ${color}">
                    <button onclick="navigator.clipboard.writeText(this.id)" id="${color}" class="color__copy"></button>
                </div>
                <p class="color__code">${color}</p>
            </div>
            `;
        });
        return "adas";
    }
}
