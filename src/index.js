import "./styles.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import addProjectToDom from "./dom/add-project-dom";
import addTodoToDom from "./dom/add-todo-dom";
import Project from "./components/project";
import ToDo from "./components/todo";
import { openForm, closeForm } from "./components/form-popup.js";
import { openTodoForm, closeTodoForm } from "./components/form-popup-todo.js";
import $ from "jquery";

let projectsArray = [new Project(0, "Sample Project")];
let todosArray = [
  new ToDo(0, "Todo Title", "Todo Description", "1/1/2020", "low"),
];
let activeProject = 0;

// let newToDo = new ToDo(0, "Sample ToDo", "Todo Description", "1/1/2020", "low");
// projectsArray[0].todoArray.push(newToDo);

addAllProjects();
addAllTodos();

// TODO: Add this to a function

displayAllTodos();

function addAllProjects() {
  $(".project-info-list").empty();
  projectsArray.forEach((project) => addProjectToDom(project));
  closeForm();
  console.log(projectsArray);
}

function addAllTodos() {
  $(".todo-info-list").empty();
  todosArray.forEach((todo) => addTodoToDom(todo));
  closeTodoForm();
  console.log(todosArray);
}

function addProject() {
  let data = $(".form-add-project").serializeArray();

  if (data[0].value === "") {
    alert("Title is blank, please insert a valid title.");
    $(".form-add-project").trigger("reset");
  } else {
    let newIdData =
      projectsArray.length === 1
        ? 1
        : projectsArray[projectsArray.length - 1].id + 1;

    console.log(newIdData);

    projectsArray.push(new Project(newIdData, data[0].value));
    addAllProjects();
  }
}

// function addTodo() {
//   let data = $(".form-add-todo");
// }

// function displayAllTodos() {
//   projectsArray[activeProject].todoArray.forEach((todo) => {
//     addTodoItemDom(todo);
//   });
// }

window.addProject = addProject;
window.addTodo = addTodo;
window.openForm = openForm;
window.closeForm = closeForm;
window.openTodoForm = openTodoForm;
window.closeTodoForm = closeTodoForm;
