const inputRef = document.querySelector('#name-input');
// console.log(inputRef);

const nameRef = document.querySelector('#name-output');
// console.log(nameRef.textContent);

inputRef.addEventListener('input', onInput);
function onInput(e) {
  //   console.log(e.currentTarget.value);
  nameRef.textContent = e.currentTarget.value;
  if (!e.currentTarget.value) {
    nameRef.textContent = 'Anonymous';
  }
}
