// create a to do list app. You enter a task into an input field and add it to a list of to do jobs. You can also edit a task or delete a task.

// get elements from HTML
const inputContainer = document.getElementById('input-container');
const currentTasks = document.getElementById('current-tasks');
const btn = document.getElementById('submit');
const taskInput = document.getElementById('to-do');

inputContainer.appendChild(btn);

// create task
btn.addEventListener('click', (e) => {
  const toDoInput = document.getElementById('to-do').value;

  // create new elements when button clicked
  const taskWrapper = document.createElement('div');
  const submittedToDo = document.createElement('h2');
  const editBtn = document.createElement('button');
  const deleteBtn = document.createElement('button');

  editBtn.textContent = 'Edit';
  deleteBtn.textContent = 'Delete';

  editBtn.className = 'edit-btn';
  deleteBtn.className = 'delete-btn';

  submittedToDo.textContent = `${toDoInput}`;

  // append new elements when button clicked
  taskWrapper.appendChild(submittedToDo);
  taskWrapper.appendChild(editBtn);
  taskWrapper.appendChild(deleteBtn);
  currentTasks.appendChild(taskWrapper);

  // resets input field
  taskInput.value = '';
});

// edit submitted task
currentTasks.addEventListener('click', (e) => {
  const taskWrapper = e.target.parentNode;

  // edit submitted task
  if (e.target.className === 'edit-btn') {
    const editBtn = e.target;

    if (editBtn.textContent === 'Edit') {
      const h2 = taskWrapper.firstElementChild;
      const input = document.createElement('input');

      input.type = 'text';
      input.value = h2.textContent;

      taskWrapper.insertBefore(input, h2);
      taskWrapper.removeChild(h2);
      editBtn.textContent = 'Save';
    } else {
      // save edited changes
      const input = taskWrapper.firstElementChild;
      const h2 = document.createElement('h2');

      h2.textContent = input.value;

      taskWrapper.insertBefore(h2, input);
      taskWrapper.removeChild(input);
      editBtn.textContent = 'Edit';
    }
  } else if (e.target.className === 'delete-btn') { // delete submitted task
    currentTasks.removeChild(taskWrapper);
  }
});
