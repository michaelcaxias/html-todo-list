const input = document.querySelector('#texto-tarefa');
const addButton = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const task = document.querySelector('.task');

/* -----Requisito 5 e 6----- */
function createTask() {
  let listItem = document.createElement('li');
  listItem.className = 'task';
  listItem.innerHTML = input.value
  taskList.appendChild(listItem);
  input.value = '';
}

addButton.addEventListener('click', createTask)
/* -----Requisito 7----- */
function colorTask(clickedItem) {
  clickedItem.target.setAttribute('style', 'background-color: rgb(128, 128, 128)')
}

taskList.addEventListener('click', colorTask)
