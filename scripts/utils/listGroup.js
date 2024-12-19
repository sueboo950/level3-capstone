export class ListGroup {
    constructor(items = []) {
        this.items = items;
    }

    generateListGroup() {
        let listHTML = '<ul class="list-group">';
        this.items.forEach(item => {
            listHTML += `<li class="list-group-item">${item}</li>`;
        });
        listHTML += '</ul>';
        return listHTML;
    }
}
