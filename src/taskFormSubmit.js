import { projectsDb } from './projectsDatabase.js';
import { Project } from './Project.js';

export class taskFormSubmit {

    constructor(projId) {
        this.taskPriority = document.getElementById('new-task-form').querySelector('select').selectedOptions[0].value;
        this.taskTitle = document.getElementById('task-name').value;
        this.taskDueDate = document.getElementById('due-date').value;
        this.taskDesc = document.getElementById('task-description').value;
        this.project = projectsDb.filter(proj => {
            return proj.id === projId;
        });
        this.taskId = `${projId}-${this.project.tasks.length + 1}`
        this.submitNewTaskForm();
    }


    newTaskObject = {
        id: this.taskId,
        type: this.taskType,
        title: this.taskTitle,
        description: this.taskDesc,
    }

    submitNewTaskForm() {
        this.project.tasks.push(this.newTaskObject);
        Project.generateTaskElement(newTaskObject);
    }
}