const inputRef = document.querySelector('#font-size-control');
// console.dir(inputRef.value);
const textRef = document.querySelector('#text');
// console.log(textRef.style);

inputRef.addEventListener('input', onChangeText);

function onChangeText() {
  textRef.style.fontSize = inputRef.value + 'px';
}
