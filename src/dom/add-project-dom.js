import $ from "jquery";

const addProjectToDom = (Project = {}) => {
  let newProject = `<li id='project-${Project.id}'>${Project.title}</li>`;

  $(".project-info-list").append(newProject);
};

export default addProjectToDom;
