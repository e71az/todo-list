const addTodoItemDom = (ToDo = {}, index) => {
  let newTodo = `<div todoItem='item-${objTodo.title}-${index}' class='d-flex justify-content-between'>
  <div>${objTodo.title}</div>
  <div>${objTodo.description}</div>
  <div>${objTodo.priority}</div>
  <div>${objTodo.dueDate}</div>
  </div>`;

  $(".todo-info-list").append(newTodo);
};

export default addTodoItemDom;
