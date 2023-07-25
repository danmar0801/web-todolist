// Get references to elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Function to create a new task item
function createTaskElement(task) {
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${task}</span>
        <button class="btn btn-danger">Delete</button>
    `;
    taskList.appendChild(li);
    // Attach event listener to delete button
    li.querySelector('.btn-danger').addEventListener('click', () => {
        li.remove();
    });
}

// Function to handle adding a new task
function addTask() {
    const task = taskInput.value.trim();
    if (task !== '') {
        createTaskElement(task);
        taskInput.value = '';
    }
}

// Attach event listener to add button
addTaskBtn.addEventListener('click', addTask);

// Attach event listener to input field to also add task when pressing Enter key
taskInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});

