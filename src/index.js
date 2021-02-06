import "./styles.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import addProjectToDom from "./dom/add-project-dom";
import addTodoToDom from "./dom/add-todo-dom";
import Project from "./components/project";
import ToDo from "./components/todo";
import { openForm, closeForm } from "./components/form-popup.js";
import { openTodoForm, closeTodoForm } from "./components/form-popup-todo.js";
import {
  openTodoEditForm,
  closeTodoEditForm,
} from "./components/form-popup-edit-todo.js";
import $ from "jquery";
import html from "./components/lit-html";

window.addProject = addProject;
window.addTodo = addTodo;
window.overwriteTodo = overwriteTodo;
window.openForm = openForm;
window.closeForm = closeForm; //TODO change this to something more descriptive
window.openTodoEditForm = openTodoEditForm;
window.closeTodoEditForm = closeTodoEditForm;
window.openTodoForm = openTodoForm;
window.closeTodoForm = closeTodoForm;
window.getActiveProject = getActiveProject;
window.setActiveProject = setActiveProject;
window.getActiveProjectId = getActiveProjectId;
window.deleteTodo = deleteTodo;
window.editTodo = editTodo;
window.html = html;

let projectsArray = [];
let currentTodo = Number;

function getProjectsArray() {
  if ("projectsArray" in window.localStorage) {
    projectsArray = JSON.parse(window.localStorage.getItem("projectsArray"));

    console.log("array set to existing one");
    console.log(projectsArray);
  } else {
    projectsArray = [
      new Project(0, "Sample Project", [
        new ToDo(0, "Todo Title", "Todo Description", "2021-02-17", "low"),
      ]),
    ];
    console.log("default created");
    console.log(projectsArray);

    setProjectsArray();
  }
}

function setProjectsArray() {
  window.localStorage.setItem("projectsArray", JSON.stringify(projectsArray));
}

// console.log(projectsArray2);
getProjectsArray();
addAllProjects();
setActiveProject(projectsArray[0].id);

function addAllProjects() {
  $(".project-info-list").empty();
  $(".todo-info-list").empty();

  projectsArray.forEach((project) => {
    addProjectToDom(project);

    // console.log(project);
    project.todoArray.forEach((todo) => addTodoToDom(todo));
  });

  // console.log(projectsArray);
  setProjectsArray();
}

function renderTodos() {
  // debugger;

  $(".todo-info-list").empty();
  let activeProject = getActiveProjectId();
  projectsArray[activeProject].todoArray.forEach((todo) => addTodoToDom(todo));
  setProjectsArray();
}

function addProject() {
  // debugger;
  let data = $(".form-add-project").serializeArray();

  if (data[0].value === "") {
    alert("Title is blank, please insert a valid title.");
    // $(".form-add-project").trigger("reset");
  } else {
    let newProjectId =
      projectsArray.length === 1
        ? 1
        : projectsArray[projectsArray.length - 1].id + 1;

    // console.log(newProjectId);

    projectsArray.push(new Project(newProjectId, data[0].value));
    addAllProjects();
    setActiveProject(newProjectId);
    closeForm();
    setProjectsArray();
  }
}

function addTodo() {
  let data = $(".form-add-todo").serializeArray();
  let [title, description, dueDate, priority] = data;
  if (!title.value || !dueDate.value) {
    alert("Todo title or date are empty, please insert valid data");
  } else {
    // debugger;
    let projectId = getActiveProjectId();
    // console.log(projectId);
    let todosArray = projectsArray[projectId].todoArray;
    let lastTodoPosition = todosArray.length - 1 || 0;
    let lastTodo = todosArray[lastTodoPosition];
    let newTodoId = todosArray.length === 0 ? 0 : lastTodo.id + 1;
    // console.log(newTodoId);

    todosArray.push(
      new ToDo(
        newTodoId,
        title.value,
        description.value,
        dueDate.value,
        priority.value
      )
    );
    addAllProjects();
    setActiveProject(projectId);
    $(".form-add-todo").trigger("reset");
    closeTodoForm();
    setProjectsArray();
  }
}

// TODO: Move this to the dom folder
function setActiveProject(identifier) {
  let activeProject = getActiveProject();
  activeProject.removeClass("active");
  $(`#project-${identifier}`).addClass("active");
  renderTodos();
  setProjectsArray();
}

function getActiveProjectId() {
  let activeNodeId = $(".project-info-list .active").attr("id");
  activeNodeId = activeNodeId.match(/\d+/);
  activeNodeId = activeNodeId[0];
  activeNodeId = parseInt(activeNodeId);
  // console.log(activeNodeId);
  setProjectsArray();
  return activeNodeId;
}

function getActiveProject() {
  let activeNode = $(".project-info-list .active");
  setProjectsArray();
  return activeNode;
}

function deleteTodo(identifier) {
  let project = projectsArray[getActiveProjectId()];
  project.todoArray = project.todoArray.filter(
    (todo) => todo.id !== identifier
  );
  renderTodos();
  // console.log("ran");
  // console.log(project.todoArray);
  // console.log(projectsArray);
  setProjectsArray();
}

// function showTodoInfo(identifier) {}

function editTodo(identifier) {
  currentTodo = identifier;
  // debugger;
  let todo = projectsArray[getActiveProjectId()].todoArray[identifier];

  openTodoEditForm();

  getTodoFormValue("input", "title").val(todo.title);
  getTodoFormValue("input", "description").val(todo.description);
  getTodoFormValue("input", "duedate").val(todo.dueDate);
  // getTodoFormValue("input", "duedate").attr("placeholder", "oli");
  getTodoFormValue("select", "priority").val(todo.priority);

  // description.value = todo.description;
  // dueDate.value = todo.dueDate;
  // priority.value = todo.priority;

  // console.log(form);
  // console.log(todo);
  // console.log(getTodoFormValue("input", "dueDate"));
  setProjectsArray();
}

function overwriteTodo() {
  let data = $(".form-edit-todo").serializeArray();
  let [title, description, dueDate, priority] = data;
  if (!title.value || !dueDate.value) {
    alert("Todo title or date are empty, please insert valid data");
  } else {
    let projectId = getActiveProjectId();

    let todosArray = projectsArray[projectId].todoArray;

    todosArray[currentTodo] = new ToDo(
      currentTodo,
      title.value,
      description.value,
      dueDate.value,
      priority.value
    );
    addAllProjects();
    setActiveProject(projectId);
    $(".form-edit-todo").trigger("reset");
    closeTodoEditForm();
    setProjectsArray();
  }
}

function getTodoFormValue(tag, name) {
  return $(`.form-edit-todo ${tag}[name='todo-edit-${name}']`);
}
