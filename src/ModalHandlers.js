import { projectFormSubmit } from './projectFormSubmit.js';
import { taskFormSubmit } from './taskFormSubmit.js';

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
        
            button.addEventListener('click', this.submitButtonHandler.bind(event));
        
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
        const mainProjectEl = document.querySelector('.main-project-element');
        e.preventDefault();
        if (this.type === 'project') {
            projectFormSubmit();
        } else if (
                   this.type === 'task' &&
                   mainProjectEl.id !== undefined   
            ) {
            taskFormSubmit(mainProjectEl.id);
        }
        
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