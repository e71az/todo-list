import $ from "jquery";

const addProjectToDom = (Project = {}) => {
  let newProject = `<a
    onclick="setActiveProject(${Project.id})"
    data-id="${Project.id}"
    class="project"
    id="project-${Project.id}"
    >${Project.title}
  </a> `;

  $(".project-info-list").append(newProject);
};

export default addProjectToDom;
