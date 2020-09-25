import { projectsDb } from './projectsDatabase.js';
import { Project } from './Project.js';

export const projectFormSubmit = () => {

   
    const projId = projectsDb.length + 1;
    const projType = document.getElementById('new-project-form').querySelector('select').selectedOptions[0].value;
    const projTitle = document.getElementById('project-name').value;
    const projDesc = document.getElementById('project-description').value;
        
    


    const newProjectObject = {
        id: projId,
        type: projType,
        title: projTitle,
        description: projDesc,
        tasks: []
    }

    const submitNewProjectForm = () => {
        projectsDb.push(newProjectObject);
        const newProj = new Project(projId, projType, projTitle, projDesc);
        newProj.projectNavHandler();
    }
    
    submitNewProjectForm();
}