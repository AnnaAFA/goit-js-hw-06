const form = document.querySelector('.login-form');
// console.log(form);

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const formElements = e.currentTarget.elements;

  if (!formElements.email.value || !formElements.password.value) {
    alert('Заповніть всі поля!');
    return;
  }

  const mail = formElements.email.value;
  const password = formElements.password.value;

  const formData = {
    mail,
    password,
  };

  console.log(formData);

  form.reset();
}
