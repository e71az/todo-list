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

let projectsArray = [
  new Project(0, "Sample Project", [
    new ToDo(0, "Todo Title", "Todo Description", "2021-02-17", "low"),
  ]),
];
let todosArray = [];

addAllProjects();
setActiveProject(projectsArray[0].id);
// addAllTodos();

function addAllProjects() {
  $(".project-info-list").empty();
  projectsArray.forEach((project) => {
    addProjectToDom(project);
    // addTodoToDom(project.todoArray[0]);
    // project.addTodoToDom(project[3]);
    console.log(project);
    project.todoArray.forEach((todo) => addTodoToDom(todo));
  });
  // projectsArray[3].forEach((todo) => addTodoToDom(todo));
  closeForm();
  console.log(projectsArray);
}

// function addAllTodos() {
//   // $(".todo-info-list").empty();
//   todosArray.forEach((todo) => addTodoToDom(todo));
//   closeTodoForm();
//   projectsArray[0].todoArray.push(todosArray);
//   console.log(todosArray);
// }

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

function addTodo() {
  let data = $(".form-add-todo").serializeArray();
  if (data[0].value === "" || data[2].value === "") {
    alert("Todo title or date are empty, please insert valid data");
    $(".form-add-todo").trigger("reset");
  } else {
    let newIdData =
      todosArray.length === 1 ? 1 : todosArray[projectsArray.length - 1].id + 1;
    console.log(newIdData);
    todosArray.push(
      new ToDo(
        newIdData,
        data[0].value,
        data[1].value,
        data[2].value,
        data[3].value
      )
    );
    addAllTodos();
  }
}

// TODO: Move this to the dom folder
function setActiveProject(identifier) {
  $(`#project-${identifier}`).addClass("active");
}

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
