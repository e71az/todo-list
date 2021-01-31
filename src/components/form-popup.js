import { $ } from "./utilities";

function openForm(event) {
  $("#myForm").classList.remove("d-none");
  return console.log(event.id);
}

function closeForm() {
  $("#myForm").classList.add("d-none");
  $(".form-container").reset();
  // return console.log(event.id);
}

export { openForm, closeForm };
