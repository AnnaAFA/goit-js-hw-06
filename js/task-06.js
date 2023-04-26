// const inputRef = document.querySelector('#validation-input');
// // console.log(inputRef);

// // console.dir(inputRef.dataset.length);

// inputRef.addEventListener('blur', onInputBlur);

// function onInputBlur() {
//   console.log(inputRef.value.length);
//   if (inputRef.value.length !== Number(inputRef.dataset.length)) {
//     inputRef.classList.add('invalid');
//     return;
//   }
//   inputRef.classList.replace('invalid', 'valid');
// }

// ______________________________________________

const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onInput);

function onInput(event) {
  // console.log(event.currentTarget.value.length);
  // console.log(Number(event.target.dataset.length));
  const inputLength = Number(event.target.dataset.length);
  const inputValue = event.currentTarget.value;
  // if (inputValue.length !== inputLength) {
  //   inputRef.classList.add('invalid');
  // } else {
  //   inputRef.classList.replace('invalid', 'valid');
  // }

  inputRef.classList.add('invalid');
  if (inputValue.length === inputLength) {
    inputRef.classList.replace('invalid', 'valid');
    return;
  }
}
