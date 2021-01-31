import $ from "jquery";

function openForm(event) {
  $("#myForm").removeClass("d-none");
  return console.log(event.id);
}

function closeForm() {
  $("#myForm").addClass("d-none");
  $(".form-container").trigger("reset");
}

export { openForm, closeForm };
