import { $ } from "../components/utilities";

const addProjectToDom = (Project = {}) => {
  let newProject = `<li id='project-${Project.id}'>${Project.title}</li>`;

  $(".project-info-list").innerHTML += newProject;
};

export default addProjectToDom;
