const formularioLogin = document.querySelector('.trybewarts-login');
const evaluationForm = document.querySelector('#evaluation-form');
const loginEmail = document.querySelector('#email');
const loginPassword = document.querySelector('#password');
const submitBtn = document.querySelector('#submit-btn');
const agreement = document.querySelector('#agreement');
const textarea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');

const getResult = () => ({
  firstName: document.querySelector('#input-name').value,
  lastName: document.querySelector('#input-lastname').value,
  email: document.querySelector('#input-email').value,
  house: document.querySelector('#house').value,
  // https://stackoverflow.com/a/24886483
  family: document.querySelector('input[name="family"]:checked').value,
  subjects: [
    ...document.querySelectorAll('input[name="content"]:checked'),
  ].map((el) => (el.value)),
  rate: document.querySelector('input[name="rate"]:checked').value,
  note: document.querySelector('#textarea').value,
});

const parseResult = ({ firstName, lastName, email, house, family, subjects, rate, note }) => {
  const result = [];

  result.push(`Nome: ${firstName} ${lastName}`);
  result.push(`Email: ${email}`);
  result.push(`Casa: ${house}`);
  result.push(`Família: ${family}`);
  result.push(`Matérias: ${subjects.join(', ')}`);
  result.push(`Avaliação: ${rate}`);
  result.push(`Observações: ${note}`);

  return result;
};

formularioLogin.addEventListener('submit', (e) => {
  e.preventDefault();

  if (loginEmail.value === 'tryber@teste.com' && loginPassword.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
});

evaluationForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const result = getResult();

  const parsedResult = parseResult(result);

  evaluationForm.innerHTML = '';

  parsedResult.forEach((text) => {
    const p = document.createElement('p');

    p.innerText = text;

    evaluationForm.appendChild(p);
  });
});

agreement.addEventListener('change', (e) => {
  if (e.target.value === 'on') {
    submitBtn.disabled = false;
    return;
  }
  submitBtn.disabled = true;
});

textarea.addEventListener('input', (e) => {
  counter.innerText = 500 - e.target.value.length;
  console.log(e.target.value.length);
});
