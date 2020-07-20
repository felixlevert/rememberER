export class ModalHandler {
    constructor(id, type) {
        this.type = type;
        this.modal = document.getElementById(`add-${this.type}-modal`);
        this.opaque = document.getElementById('opaque');
        this.thisModalVisible = false;
        this.connectAddButton(id);
        this.connectCancelButton();
    }

    connectAddButton(id) {
        const button = document.getElementById(id);
        button.addEventListener('click', this.addButtonHandler.bind(this));
    }

    connectCancelButton() {
        const button = this.modal.querySelector('button');
        button.addEventListener('click', this.closeButtonHandler.bind(this));
        this.opaque.addEventListener('click', this.closeButtonHandler.bind(this));
    }



    addButtonHandler() {
        this.thisModalVisible = true;
        this.opaque.classList.toggle('show');
        this.modal.classList.toggle('show');
    }

    closeButtonHandler() {
        if (this.thisModalVisible === true) {
            this.opaque.classList.toggle('show');
            this.modal.classList.toggle('show');
            this.thisModalVisible = false;
        }
    }

}