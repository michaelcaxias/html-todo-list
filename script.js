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

/* -----Requisito 9----- */
function completeTask(clickedItem) {
  const completedTask = clickedItem.target;
  if (completedTask.classList.contains('completed')) {
    completedTask.classList.remove('completed');
  } else {
    completedTask.classList.add('completed');
  }
}
taskList.addEventListener('dblclick', completeTask);

/* -----Requisito 10----- */
function clear() {
  const task = document.querySelectorAll('li');
  for (let index = 0; index < task.length; index += 1) {
    taskList.removeChild(task[index]);
  }
}
clearButton.addEventListener('click', clear);
