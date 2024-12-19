export class GridSystem {
    constructor(rows = 1, cols = 1) {
        this.rows = rows;
        this.cols = cols;
    }

    generateGrid(contentArray) {
        let gridHTML = '<div class="container">';
        for (let i = 0; i < this.rows; i++) {
            gridHTML += '<div class="row">';
            for (let j = 0; j < this.cols; j++) {
                const content = contentArray[i * this.cols + j] || '';
                gridHTML += `<div class="col">${content}</div>`;
            }
            gridHTML += '</div>';
        }
        gridHTML += '</div>';
        return gridHTML;
    }
}
