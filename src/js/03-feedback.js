var throttle = require('lodash.throttle');
const formRef = document.querySelector('.feedback-form');

const FORM_KEY = 'feedback-form-state';
const parsedData = localStorage.getItem(FORM_KEY);
let data = {};

if (parsedData) {
data = JSON.parse(parsedData);
formRef.elements.email.value = data.email;
formRef.elements.message.value = data.message;
}

const inputHandler = e => {
  const { email, message, name, value } = e.target;
  data = {
    ...data,
    [name]: value,
  }

  localStorage.setItem(FORM_KEY, JSON.stringify(data));
};

const submitHandler = e => {
  e.preventDefault();
  const form = e.currentTarget;//or form.elements
  const formData = new FormData(form);
  const finishData = {};
  const entries = formData.entries();

  for (const [name, value] of entries) {
    finishData[name] = value;
      if (!value) return;
  }

  console.table(data);
  console.log(data);

  data = {};
  localStorage.removeItem(FORM_KEY);
  formRef.elements.email.value = '';
  formRef.elements.message.value = '';
}

formRef.addEventListener('input', throttle(inputHandler, 500));
formRef.addEventListener('submit', submitHandler);


