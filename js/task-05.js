// const inputRef = document.querySelector('#name-input');
// // console.log(inputRef);

// const nameRef = document.querySelector('#name-output');
// // console.log(nameRef.textContent);

// inputRef.addEventListener('input', onInput);
// function onInput(e) {
//   //   console.log(e.currentTarget.value);
//   nameRef.textContent = e.currentTarget.value;
//   if (!e.currentTarget.value) {
//     nameRef.textContent = 'Anonymous';
//   }
// }

// ___________________________________________________

const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');

inputRef.addEventListener('input', onInput);

function onInput(event) {
  const inputValue = event.currentTarget.value;
  // console.log(event.currentTarget.value);
  spanRef.textContent = inputValue;
  if (!inputValue) {
    spanRef.textContent = 'Anonymous';
  }
}

// console.log(spanRef.textContent);
