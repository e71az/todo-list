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
let activeProject = 0;

addAllProjects();
setActiveProject(projectsArray[0].id);

function addAllProjects() {
  $(".project-info-list").empty();
  $(".todo-info-list").empty();

  projectsArray.forEach((project) => {
    addProjectToDom(project);

    console.log(project);
    project.todoArray.forEach((todo) => addTodoToDom(todo));
  });

  console.log(projectsArray);
}

function renderTodos() {
  $(".todo-info-list").empty();
  let activeProject = getActiveProjectId();
  projectsArray[activeProject].todoArray.forEach((todo) => addTodoToDom(todo));
}

function addProject() {
  let data = $(".form-add-project").serializeArray();

  if (data[0].value === "") {
    alert("Title is blank, please insert a valid title.");
    // $(".form-add-project").trigger("reset");
  } else {
    let newProjectId =
      projectsArray.length === 1
        ? 1
        : projectsArray[projectsArray.length - 1].id + 1;

    console.log(newProjectId);

    projectsArray.push(new Project(newProjectId, data[0].value));
    addAllProjects();
    setActiveProject(newProjectId);
    closeForm();
  }
}

function addTodo() {
  let data = $(".form-add-todo").serializeArray();
  let [title, description, dueDate, priority] = data;
  if (!title.value || !dueDate.value) {
    alert("Todo title or date are empty, please insert valid data");
  } else {
    debugger;
    let projectId = getActiveProjectId();
    console.log(projectId);
    let todosArray = projectsArray[projectId].todoArray;
    let lastTodoPosition = todosArray.length - 1 || 0;
    let lastTodo = todosArray[lastTodoPosition];
    let newTodoId = todosArray.length === 0 ? 0 : lastTodo.id + 1;
    console.log(newTodoId);

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
  }
}

// TODO: Move this to the dom folder
function setActiveProject(identifier) {
  let activeProject = getActiveProject();
  activeProject.removeClass("active");
  $(`#project-${identifier}`).addClass("active");
  renderTodos();
}

function getActiveProjectId() {
  let activeNodeId = $(".project-info-list .active").attr("id");
  activeNodeId = activeNodeId.match(/\d+/);
  activeNodeId = activeNodeId[0];
  activeNodeId = parseInt(activeNodeId);
  console.log(activeNodeId);
  return activeNodeId;
}

function getActiveProject() {
  let activeNode = $(".project-info-list .active");
  return activeNode;
}

function deleteTodo() {
  let activeNode = getActiveProject();
  activeNode.remove();
}

function showTodoInfo(identifier) {}

window.addProject = addProject;
window.addTodo = addTodo;
window.openForm = openForm;
window.closeForm = closeForm; //TODO change this to something more descriptive
window.openTodoForm = openTodoForm;
window.closeTodoForm = closeTodoForm;
window.getActiveProject = getActiveProject;
window.setActiveProject = setActiveProject;
window.getActiveProjectId = getActiveProjectId;
