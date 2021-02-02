import $ from "jquery";

function openForm() {
  $("#myForm").removeClass("d-none");
}

function closeForm() {
  $("#myForm").on("click", function (event) {
    event.preventDefault();
    event.isDefaultPrevented();
  });
  $("#myForm").addClass("d-none");
  $(".form-container").trigger("reset");
}

export { openForm, closeForm };
