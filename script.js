const formulario = document.querySelector('.trybewarts-login');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  console.log(e);

  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
});
