import "./styles.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import addProjectToDom from "./dom/add-project-dom";
import Project from "./components/project";
import { openForm, closeForm } from "./components/form-popup.js";
import { $ } from "./components/utilities";

let projectsArray = [new Project("Sample Project")];

projectsArray.forEach((project, index) => addProjectToDom(project, index));

function addProject() {
  let data = $(".form-add-project").serialize();
  console.log(data);
}

window.addProject = addProject;
window.openForm = openForm;
window.closeForm = closeForm;
