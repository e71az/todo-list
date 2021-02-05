import $ from "jquery";

function openTodoEditForm() {
  $("#todoEditForm").removeClass("d-none");
}

function closeTodoEditForm() {
  // This is preventing me from opening the calendar
  // $("#todoForm").on("click", function (event) {
  //   event.preventDefault();
  //   event.isDefaultPrevented();
  // });
  $("#todoEditForm").addClass("d-none");
  $(".form-edit-todo").trigger("reset");
}

export { openTodoEditForm, closeTodoEditForm };
