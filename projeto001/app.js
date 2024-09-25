class Task {
    constructor(title) {
        this.title = title;
        this.completed = false;
    }
}

class TaskManager {
    constructor() {
        this.tasks = [];
    }

    addTask(title) {
        const task = new Task(title);
        this.tasks.push(task);
        this.renderTasks();
    }

    removeTask(index) {
        this.tasks.splice(index, 1);
        this.renderTasks();
    }

    toggleTask(index) {
        this.tasks[index].completed = !this.tasks[index].completed;
        this.renderTasks();
    }

    renderTasks() {
        const taskList = document.getElementById('task-list');
        taskList.innerHTML = '';
        this.tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.textContent = task.title;
            li.className = task.completed ? 'completed' : '';
            li.addEventListener('click', () => this.toggleTask(index));
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remover';
            removeBtn.onclick = (e) => {
                e.stopPropagation();
                this.removeTask(index);
            };
            li.appendChild(removeBtn);
            taskList.appendChild(li);
        });
    }
}

const taskManager = new TaskManager();

document.getElementById('add-task').addEventListener('click', () => {
    const taskInput = document.getElementById('task-input');
    const taskTitle = taskInput.value;
    if (taskTitle) {
        taskManager.addTask(taskTitle);
        taskInput.value = '';
    }
});
