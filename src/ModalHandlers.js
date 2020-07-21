import { FormSubmit } from './FormSubmits.js';

export class ModalHandler {
    constructor(id, type) {
        this.type = type;
        this.modal = document.getElementById(`add-${this.type}-modal`);
        this.opaque = document.getElementById('opaque');
        this.form = this.modal.querySelector('form');
        this.thisModalVisible = false;
        this.connectAddButton(id);
        this.connectSubmitButton();
        this.connectCancelButton();
    }

    connectAddButton(id) {
        const button = document.getElementById(id);
        button.addEventListener('click', this.addButtonHandler);
    }

    connectSubmitButton() {
        const button = this.modal.querySelector('button').nextElementSibling;
        if (this.type === 'project') {
            button.addEventListener('click', this.submitButtonHandler.bind(event));
        }
    }

    connectCancelButton() {
        const button = this.modal.querySelector('button');
        button.addEventListener('click', this.closeModalHandler);
        this.opaque.addEventListener('click', this.closeModalHandler);
    }



    addButtonHandler = () => {
        this.thisModalVisible = true;
        this.opaque.classList.toggle('show');
        this.modal.classList.toggle('show');
    }

    submitButtonHandler = (e) => {
        e.preventDefault();
        new FormSubmit();
        this.closeModalHandler();
        this.form.reset();
    }

    closeModalHandler = () => {
        if (this.thisModalVisible === true) {
            this.opaque.classList.toggle('show');
            this.modal.classList.toggle('show');
            this.thisModalVisible = false;
        }
    }

}