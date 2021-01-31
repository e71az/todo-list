import { $ } from "./utilities";

function openForm(event) {
  $("#myForm").style.display = "block";
  return console.log(event.id);
}

function closeForm(event) {
  $("#myForm").style.display = "none";
  return console.log(event.id);
}

export { openForm, closeForm };
