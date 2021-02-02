import $ from "jquery";

const addTodoToDom = (ToDo = {}) => {
  let newTodo = `<li todoItem='todo-${ToDo.id}' class='d-flex justify-content-between'>
  <span>${ToDo.title}</span>
  <span>${ToDo.description}</span>
  <span>${ToDo.dueDate}</span>
  <span>${ToDo.priority}</span>
  </li>`;

  $(".todo-info-list").append(newTodo);
};

export default addTodoToDom;
