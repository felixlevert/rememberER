import { projectsDb } from './projectsDatabase.js';
import { createTaskElement } from './createTaskElement.js';

export const taskFormSubmit = (projId) => {

    const taskPriority = document.getElementById('new-task-form').querySelector('select').selectedOptions[0].value;
    const taskTitle = document.getElementById('task-name').value;
    const taskDueDate = document.getElementById('due-date').value;
    const taskDesc = document.getElementById('task-description').value;
    const project = projectsDb.filter(proj => {
        return proj.id == projId;
    }); 
    const taskId = `${projId}-${project[0].tasks.length + 1}`;
    const placeholder = document.getElementById('project-tasks-placeholder');
  

    const newTaskObject = {
        id: taskId,
        priority: taskPriority,
        title: taskTitle,
        dueDate: taskDueDate,
        description: taskDesc
    }

    const submitNewTaskForm = () => {
        project[0].tasks.push(newTaskObject);
        createTaskElement(newTaskObject);
    }

    if (window.getComputedStyle(placeholder).visibility == 'visible') {
        placeholder.classList.toggle('show');
    }
    submitNewTaskForm();
}