// create a to do list app. You enter a task into an input field and add it to a list of to do jobs. You can also edit a task or delete a task.

// get elements from HTML
const inputContainer = document.getElementById('inputContainer');
const currentTasks = document.getElementById('currentTasks');
const btn = document.getElementById('submit');
let taskInput = document.getElementById('toDo');
inputContainer.appendChild(btn);

btn.addEventListener('click', (e) => {

  let toDoInput = document.getElementById('toDo').value;

  // create new elements when button clicked
  const container = document.createElement('div');
  const submittedToDo = document.createElement('h2');
  const editBtn = document.createElement('button');
  const deleteBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  deleteBtn.textContent = 'Delete';

  // append new elements when button clicked
  container.appendChild(submittedToDo);
  container.appendChild(editBtn);
  container.appendChild(deleteBtn);
  currentTasks.appendChild(container);

  submittedToDo.textContent = `${toDoInput}`;

  // resets input field
  taskInput.value = '';

  // edit submitted task
  editBtn.addEventListener('click', (e) => {
    if (editBtn.textContent === 'Edit') {
      const h2 = container.firstElementChild;
      const input = document.createElement('input');
      input.type = 'text';
      input.value = h2.textContent;
      container.insertBefore(input, h2);
      container.removeChild(h2);
      editBtn.textContent = 'Save';
    } else {
      // save edited changes
      const input = container.firstElementChild;
      const h2 = document.createElement('h2');
      h2.textContent = input.value;
      container.insertBefore(h2, input);
      container.removeChild(input);
      editBtn.textContent = 'Edit';
    }
  });

  // delete submitted task
  deleteBtn.addEventListener('click', (e) => {
    currentTasks.removeChild(container);
  });

});