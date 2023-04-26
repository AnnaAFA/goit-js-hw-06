// const form = document.querySelector('.login-form');
// // console.log(form);

// form.addEventListener('submit', onFormSubmit);

// function onFormSubmit(e) {
//   e.preventDefault();

//   const formElements = e.currentTarget.elements;

//   if (!formElements.email.value || !formElements.password.value) {
//     alert('Заповніть всі поля!');
//     return;
//   }

//   const mail = formElements.email.value;
//   const password = formElements.password.value;

//   const formData = {
//     mail,
//     password,
//   };

//   console.log(formData);

//   form.reset();
// }

// ______________________________________________

const formRef = document.querySelector('.login-form');
// console.log(formRef);

formRef.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const eElements = e.currentTarget.elements;
  // console.log(e.currentTarget.elements);

  const email = eElements.email.value;
  const password = eElements.password.value;

  // console.log(email);
  // console.log(password);

  if (!email || !password) {
    alert('Заповніть всі поля!');
    return;
  }

  const formData = {
    email,
    password,
  };
  console.log(formData);
  formRef.reset();
}
