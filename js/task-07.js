// const inputRef = document.querySelector('#font-size-control');
// console.dir(inputRef.value);
// const textRef = document.querySelector('#text');
// // console.log(textRef.style);

// inputRef.addEventListener('input', onChangeText);

// function onChangeText() {
//   textRef.style.fontSize = inputRef.value + 'px';
// }

// ___________________________________________

const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

inputRef.addEventListener('input', onInput);

function onInput(value) {
  const inputValue = value.currentTarget.value;
  // console.log(value.currentTarget.value);
  spanRef.style.fontSize = inputValue + 'px';
  // console.log(spanRef.style.fontSize);
}
