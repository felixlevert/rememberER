
export class Project {
    constructor(projId, projType, projTitle, projDesc) {

        this.navbarEl(projId, projType, projTitle);
        // this.mainProjectEl(projId, projType, projTitle, projDesc);
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
    }


//     mainProjectEl(id, type, title, desc) {

//     }
}