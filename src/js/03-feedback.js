// Add to the project and use the lodash.throttle library.
import throttle from "lodash.throttle";

// Let the key for the storage be the "feedback-form-state" string.
const storageKey = "feedback-form-state";

const formEl = document.querySelector('.feedback-form');

// Make sure that the storage is updated no more than once every 500 milliseconds.
formEl.addEventListener('input', throttle(onDataInput, 500));
formEl.addEventListener("submit", onFormSubmit);

// Check the state of the storage, if it stores some data, use it. Otherwise, the fields must be empty.
let infoForm = JSON.parse(localStorage.getItem(storageKey)) || {};
const {email, message} = formEl.elements;
reloadPage();

function onDataInput(e) {
  infoForm = {email: email.value, message: message.value};
  localStorage.setItem(storageKey, JSON.stringify(infoForm));
};

function reloadPage() {
  if (infoForm) {
      email.value = infoForm.email || "";
      message.value = infoForm.message || "";
  };
};

// When submitting the form, clear the storage and form fields
function onFormSubmit(e) {
  e.preventDefault();
  console.log({email: email.value, message: message.value});

  if (email.value === "" || message.value === "") {
      return alert("Please fill in all the fields!");
  }

  localStorage.removeItem(storageKey);

  e.currentTarget.reset();

  infoForm = {};
};