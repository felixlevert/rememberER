export const createTaskElement = (task) => {
    const taskList = document.getElementById('task-list');
    const template = document.getElementById('task-element-template');
    const taskEl = document.createElement('div');

    taskEl.append(template.content.cloneNode(true));
    taskEl.id = task.id;
    taskEl.querySelector('.task-name').textContent = task.title;
    taskEl.querySelector('.due-date').textContent = task.dueDate;
    taskEl.querySelector('.task-description').textContent = task.description;

    const expandButton = taskEl.querySelector('.task-expand-button');
    expandButton.addEventListener('click', () => {
        taskEl.querySelector('.task-element-expand').classList.toggle('show');
        taskEl.querySelector('.delete-task-btn').classList.toggle('show');
        taskEl.querySelector('.edit-task-btn').classList.toggle('show');
        taskEl.querySelector('.done-task-btn').classList.toggle('show');
    });

    taskList.appendChild(taskEl);
}