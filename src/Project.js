import { projectsDb } from './projectsDatabase.js'

export class Project {
    constructor(projId, projType, projTitle, projDesc) {
        this.id = projId;
        this.type = projType;
        this.title = projTitle;
        this.desc = projDesc;
        this.navbarEl(projId, projType, projTitle);
    }


    navbarEl(id, type, title) {
        const projList = document.getElementById('project-list');
        const template = document.getElementById('project-nav-el-template');
        const projectNavElement = document.createElement('div');
        projectNavElement.append(template.content.cloneNode(true));
        const projectButton = projectNavElement.querySelector('button');
        projectNavElement.id = id;
        const icons = {
            'travel': "./dist/assets/images/plane-icon.png",
            'home': "./dist/assets/images/home-icon.png",
            'coding': "./dist/assets/images/coding-icon.png",
            'other': "./dist/assets/images/other-icon.png"
        }
        const projectIcon = projectButton.querySelector('img');
        
        projectIcon.src = icons[type];
        projectIcon.className = `${type}-icon`;
        projectButton.textContent = title;
        projectButton.appendChild(projectIcon);
        projList.appendChild(projectNavElement);
        projectButton.addEventListener('click', this.projectNavHandler);
    }


    projectNavHandler = () => {
        const mainProjectEl = document.getElementById('main-project-element');
        const homeScreen = document.getElementById('home-screen');
        this.generateProjectHeader(this.type, this.title, this.desc);
        this.generateTaskList(this.id);
        if (window.getComputedStyle(mainProjectEl).visibility !== 'visible') {
            mainProjectEl.classList.toggle('show');    
        }
        
        if (window.getComputedStyle(homeScreen).visibility == 'visible') {
            homeScreen.classList.toggle('show');
        }
    }

    
    generateProjectHeader(type, title, description) {
        const header = document.querySelector('.main-project-header');
        header.querySelector('.main-project-title').textContent = title;
        header.querySelector('.main-project-type').textContent = type;
        header.querySelector('.main-project-description').textContent = description;
        
    }

    clearTasks() {
        const taskList = document.getElementById('task-list');

        const emptyList = taskList.cloneNode(false);
        taskList.parentNode.replaceChild(emptyList, taskList);
    }


    generateTaskList(id) {
        const project = projectsDb[(id - 1)];
        
        this.clearTasks();
        this.taskPlaceholderHandler(project);

        for (const task of project.tasks) {
            this.createTaskElement(task);
        }
        
    }

    taskPlaceholderHandler(project) {
        const placeholder = document.getElementById('project-tasks-placeholder');

        if (project.tasks.length === 0) {
            if (window.getComputedStyle(placeholder).visibility == 'hidden') {
                placeholder.classList.toggle('show');
            }
        }

        if (project.tasks.length !== 0) {
            if (window.getComputedStyle(placeholder).visibility == 'visible') {
                placeholder.classList.toggle('show');
            }
        }
    }

    revealMoreTaskHandler(taskElement) {
        taskElement.classList.toggle('show');
    }

    createTaskElement(task) {
        const taskList = document.getElementById('task-list');
        const template = document.getElementById('task-element-template');
        const taskEl = document.createElement('div');

        taskEl.append(template.content.cloneNode(true));
        taskEl.id = task.id;
        taskEl.querySelector('.task-name').textContent = task.title;
        taskEl.querySelector('.due-date').textContent = task.dueDate;
        taskEl.querySelector('.task-description').textContent = task.description;

        const expandButton = taskEl.querySelector('.task-expand-button');
        expandButton.addEventListener('click', this.revealMoreTaskHandler(taskEl));

        taskList.appendChild(taskEl);
    }
}