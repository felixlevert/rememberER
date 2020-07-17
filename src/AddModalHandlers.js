export class AddModalHandler {
    constructor(id, type) {
        this.type = type;
        this.connectAddButton(id);
    }

    connectAddButton(id) {
        const button = document.getElementById(id);
        button.addEventListener('click', this.addButtonHandler.bind(this));
    }

    addButtonHandler() {
        const modal = document.getElementById(`add-${this.type}-modal`);
        const opaque = document.getElementById('opaque');
        opaque.style.display = 'block';
        modal.style.display = 'block';
    }
}