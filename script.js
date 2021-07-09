let input = document.querySelector('#texto-tarefa');
let addButton = document.querySelector('#criar-tarefa');
let taskList = document.querySelector('#lista-tarefas');
let task = document.getElementsByTagName('li');
let currentTask = document.getElementsByClassName('selected');

/* -----Requisito 5 e 6----- */
function createTask() {
  let listItem = document.createElement('li');
  listItem.innerHTML = input.value
  taskList.appendChild(listItem);
  input.value = '';
}

addButton.addEventListener('click', createTask)
/* -----Requisito 7 e 8----- */
function colorTask(clickedItem) {
  const selectedTask = clickedItem.target;
  if (selectedTask !== currentTask) {
    for (let index = 0; index < task.length; index++) {
      task[index].classList.remove('selected')
    }
    selectedTask.classList.add('selected');
  }
  currentTask = selectedTask
}

taskList.addEventListener('click', colorTask)

