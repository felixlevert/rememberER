
export class Project {
    constructor(projId, projType, projTitle, projDesc) {
        this.id = projId;
        this.navbarEl(projId, projType, projTitle);
        this.mainProjectEl(projId, projType, projTitle, projDesc);
    }


    navbarEl(id, type, title) {
        const projList = document.getElementById('project-list');
        const projectNavElement = document.createElement('li');
        projectNavElement.id = id;
        projectNavElement.className = 'nav-project';
        const icons = {
            'travel': "./dist/assets/images/plane-icon.png",
            'home': "./dist/assets/images/home-icon.png",
            'coding': "./dist/assets/images/coding-icon.png",
            'other': "./dist/assets/images/other-icon.png"
        }
        const projectIcon = document.createElement('img');
        
        projectIcon.src = icons[type];
        projectIcon.className = `${type}-icon`;
        projectNavElement.textContent = title;
        projectNavElement.appendChild(projectIcon);
        projList.appendChild(projectNavElement);
        projectNavElement.addEventListener('click', this.projectNavHandler);
    }


    mainProjectEl(id, type, title, desc) {
        const mainDiv = document.getElementById('main');
        const template = document.querySelector('.main-project-element');
        const mainProjectElement = document.createElement('div');
        mainProjectElement.append(template.content.cloneNode(true));
        mainProjectElement.id = `${id}-tasks-element`;
        mainProjectElement.querySelector('h2').textContent = title;
        mainProjectElement.querySelector('h3').textContent = type;
        mainProjectElement.querySelector('p').textContent = desc;
        mainDiv.appendChild(mainProjectElement);
        console.log(mainProjectElement)
    }

    projectNavHandler = () => {
        const mainProjectEl = document.getElementById(`${this.id}-tasks-element`);
        const header = mainProjectEl.querySelector('.main-project-header');
        const homeScreen = document.getElementById('home-screen');
        header.classList.toggle('show');
        console.log(homeScreen.style)
        if (homeScreen.style.visibility == 'visible') {
            homeScreen.classList.toggle('show');
        }
    }
}