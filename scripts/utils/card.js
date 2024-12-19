export class Card {
    constructor(title = '', text = '') {
        this.title = title;
        this.text = text;
    }

    generateCard() {
        return `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${this.title}</h5>
                    <p class="card-text">${this.text}</p>
                </div>
            </div>
        `;
    }
}
