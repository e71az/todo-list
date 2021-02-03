class Project {
  constructor(id, title, todoArray = []) {
    this.id = id;
    this.title = title;
    this.todoArray = todoArray;
  }

  // deleteProject() {
  //   this.pop();
  // }
}

export default Project;
