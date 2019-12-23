// Vars
const email = document.getElementById('email');
const subject = document.getElementById('asunto');
const message = document.getElementById('email');
const btnSubject = document.getElementById('enviar');
const formEmail = document.getElementById('enviar-mail');
const resetBtn = document.getElementById('resetBtn');

// Listeners
eventListeners();
function eventListeners() {
  document.addEventListener('DOMContentLoaded', startApp);
  email.addEventListener('blur', checkField);
  subject.addEventListener('blur', checkField);
  message.addEventListener('blur', checkField);
  formEmail.addEventListener('submit', sendEmail);
  resetBtn.addEventListener('click', resetForm);
}

// Functions
function startApp() {
  btnSubject.disabled = true;
}
function checkField() {
  validarLongitud(this);
  if (this.type == 'email') {
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
function sendEmail(e) {
  e.preventDefault();

  const spinnerGif = document.querySelector('#spinner');
  spinnerGif.style.display = 'block';

  const sending = document.createElement('img');
  sending.src = 'img/mail.gif';
  sending.style.display = 'block';

  setTimeout(() => {
    spinnerGif.style.display = 'none';
    document.getElementById('loaders').appendChild(sending);
    setTimeout(() => {
      sending.style.display = 'none';
      formEmail.reset();
    }, 5000);
  }, 3000);

  console.log('Mail Enviado');
}
function resetForm(e) {
  e.preventDefault();
  formEmail.reset();
}