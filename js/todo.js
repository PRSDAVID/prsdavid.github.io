const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";
const savedToDos = localStorage.getItem("TODOS_KEY");
let toDos = [];

function saveToDos() {
  localStorage.setItem("TODOS_KEY", JSON.stringify(toDos));
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  const button = document.createElement("button");

  button.innerText = "❌";
  span.innerText = newToDo.text;
  li.appendChild(button);
  li.appendChild(span);
  toDoList.appendChild(li);
  button.addEventListener("click", deleteToDo);
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  toDos = toDos.filter((item) => item.id !== parseInt(li.id));
  li.remove();
  saveToDos();
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
