import { $ } from "../components/utilities";

const addProjectToDom = (Project = {}, index = Number()) => {
  let newProject = `<li id='project-${index}'>${Project.title}</li>`;

  $(".project-info-list").innerHTML += newProject;
};

export default addProjectToDom;
