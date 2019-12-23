// Vars
const email = document.getElementById('email');
const subject = document.getElementById('asunto');
const message = document.getElementById('email');
const btnSubject = document.getElementById('enviar');

// Listeners
eventListeners();
function eventListeners() {
  document.addEventListener('DOMContentLoaded', startApp);
  email.addEventListener('blur', checkField);
  subject.addEventListener('blur', checkField);
  message.addEventListener('blur', checkField);
}

// Functions
function startApp() {
  btnSubject.disabled = true;
}
function checkField() {
  validarLongitud(this);
  if (this.type = 'email') {
    validateEmail(this);
  }
  let errores = document.querySelectorAll('.error');
  if (email.value !== '' && subject.value !== '' && message.value !== '') {
    if (errores.length === 0) {
      btnSubject.disabled = false;
    }
  }
}
function validarLongitud(inputField) {
  if (inputField.value.length > 0) {
    inputField.style.borderBottomColor = 'green';
    inputField.classList.remove('error');
  } else {
    inputField.style.borderBottomColor = 'red';
    inputField.classList.add('error');
  }
}
function validateEmail(email) {
  const emailValue = email.value;
  if (emailValue.indexOf('@') !== -1) {
    email.style.borderBottomColor = 'green';
    email.classList.remove('error');
  } else {
    email.style.borderBottomColor = 'red';
    email.classList.add('error');
  }
}