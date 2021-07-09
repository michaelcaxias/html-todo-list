const input = document.querySelector('#texto-tarefa');
const addButton = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const task = document.getElementsByTagName('li');
let currentTask = document.getElementsByClassName('selected');
const clearButton = document.querySelector('#apaga-tudo');
const header = document.querySelector('header');

/* -----Requisito 5 e 6----- */
function createTask() {
  const listItem = document.createElement('li');
  listItem.innerHTML = input.value;
  taskList.appendChild(listItem);
  input.value = '';
}

addButton.addEventListener('click', createTask);

/* -----Requisito 7 e 8----- */
function colorTask(clickedItem) {
  const selectedTask = clickedItem.target;
  if (selectedTask !== currentTask) {
    for (let index = 0; index < task.length; index += 1) {
      task[index].classList.remove('selected');
    }
    selectedTask.classList.add('selected');
  }
  currentTask = selectedTask;
}

taskList.addEventListener('click', colorTask);

/* -----Requisito 10----- */
function clear() {
  header.removeChild(taskList);
  const createOl = document.createElement('ol');
  createOl.id = 'lista-tarefas';
}
clearButton.addEventListener('click', clear);
