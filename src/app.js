import { ModalHandler } from './ModalHandlers.js'
import { projectsDb } from './projectsDatabase.js'
import { Project } from './Project.js'


class App {
    static init() {
        new ModalHandler('new-project-btn', 'project');
        new ModalHandler('add-item-btn', 'task');
        
        for (const project of projectsDb) {
            new Project(project.id, project.type, project.title, project.description);
        }
    }
}

App.init();