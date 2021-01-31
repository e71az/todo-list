import { $ } from "./utilities";

// function openForm(event) {
//   $("#myForm").style.display = "block";
//   return console.log(event.id);
// }

function openForm(event) {
  $("#myForm").classList.remove("d-none");
  // return console.log(event.id);
}

function closeForm(event) {
  $("#myForm").classList.add("d-none");
  $(".form-container").reset();
  // return console.log(event.id);
}

export { openForm, closeForm };
