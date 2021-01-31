import "./styles.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import addProjectToDom from "./dom/add-project-dom";
import Project from "./components/project";
import { openForm, closeForm } from "./components/form-popup.js";

let projectsArray = [new Project("Sample Project")];

projectsArray.forEach((project, index) => addProjectToDom(project, index));

window.openForm = openForm;
window.closeForm = closeForm;
