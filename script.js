const input = document.querySelector('#texto-tarefa');
const addButton = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const task = document.querySelector('.task');

/* -----Requisito 5----- */
function createTask() {
  let listItem = document.createElement('li');
  listItem.className = 'task';
  listItem.innerHTML = input.value
  taskList.appendChild(listItem);
  input.value = '';
}

addButton.addEventListener('click', createTask)