import $ from "jquery";

function openTodoForm() {
  $("#todoForm").removeClass("d-none");
}

function closeTodoForm() {
  $("#todoForm").on("click", function (event) {
    event.preventDefault();
    event.isDefaultPrevented();
  });
  $("#todoForm").addClass("d-none");
  $(".form-container").trigger("reset");
}

export { openTodoForm, closeTodoForm };
