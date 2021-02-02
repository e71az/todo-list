import $ from "jquery";

function openTodoForm() {
  $("#todoForm").removeClass("d-none");
}

function closeTodoForm() {
  // This is preventing me from opening the calendar
  // $("#todoForm").on("click", function (event) {
  //   event.preventDefault();
  //   event.isDefaultPrevented();
  // });
  $("#todoForm").addClass("d-none");
  $(".form-container").trigger("reset");
}

export { openTodoForm, closeTodoForm };
