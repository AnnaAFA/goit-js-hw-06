const inputRef = document.querySelector('#validation-input');
// console.log(inputRef);

// console.dir(inputRef.dataset.length);

inputRef.addEventListener('blur', onInputBlur);

function onInputBlur() {
  console.log(inputRef.value.length);
  if (inputRef.value.length !== Number(inputRef.dataset.length)) {
    inputRef.classList.add('invalid');
    return;
  }
  inputRef.classList.replace('invalid', 'valid');
}
