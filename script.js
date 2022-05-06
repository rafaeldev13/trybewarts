const formulario = document.querySelector('.trybewarts-login');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const submitBtn = document.querySelector('#submit-btn');
const agreement = document.querySelector('#agreement');

formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  console.log(e);

  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
});

agreement.addEventListener('change', (e) => {
  if (e.target.value === 'on') {
    submitBtn.disabled = false;
    return;
  }
  submitBtn.disabled = true;
});
