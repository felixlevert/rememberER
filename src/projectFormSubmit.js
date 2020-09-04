import { projectsDb } from './projectsDatabase.js';
import { Project } from './Project.js';

export class projectFormSubmit {

    constructor() {
        this.projId = projectsDb.length + 1;
        this.projType = document.getElementById('new-project-form').querySelector('select').selectedOptions[0].value;
        this.projTitle = document.getElementById('project-name').value;
        this.projDesc = document.getElementById('project-description').value;
        this.submitNewProjectForm();
    }


    newProjectObject = {
        id: this.projId,
        type: this.projType,
        title: this.projTitle,
        description: this.projDesc,
        tasks: []
    }

    submitNewProjectForm() {
        projectsDb.push(this.newProjectObject);
        const newProj = new Project(this.projId, this.projType, this.projTitle, this.projDesc);
        newProj.projectNavHandler();
    }
}