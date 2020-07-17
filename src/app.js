import { AddModalHandler } from './AddModalHandlers.js'

class App {
    static init() {
        new AddModalHandler('new-project-btn', 'project');
        new AddModalHandler('add-item-btn', 'task');
    }
}

App.init();