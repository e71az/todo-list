import "./styles.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import addProjectToDom from "./dom/add-project-dom";
import Project from "./components/project";
import { openForm, closeForm } from "./components/form-popup.js";
import $ from "jquery";

let projectsArray = [new Project(0, "Sample Project")];

addAllProjects();

function addAllProjects() {
  $(".project-info-list").empty();
  projectsArray.forEach((project) => addProjectToDom(project));
  closeForm();
  console.log(projectsArray);
}

function addProject() {
  let data = $(".form-add-project").serializeArray();
  let newIdData =
    projectsArray.length === 1
      ? 1
      : projectsArray[projectsArray.length - 1].id + 1;

  console.log(newIdData);
  projectsArray.push(new Project(newIdData, data[0].value));
  addAllProjects();
}

window.addProject = addProject;
window.openForm = openForm;
window.closeForm = closeForm;
