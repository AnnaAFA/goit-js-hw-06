function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputRef = document.querySelector('#controls input');
console.log(inputRef);
const btnCreate = document.querySelector('[data-create]');
console.log(btnCreate);
const btnDestroy = document.querySelector('[data-destroy]');
console.log(btnDestroy);
const boxesRef = document.querySelector('#boxes');
console.log(boxesRef);

btnCreate.addEventListener('click', onCreateBtn);
// inputRef.addEventListener('input', onInputValue);
btnDestroy.addEventListener('click', onDestroyBtn);

function createBoxes(amount) {
  let size = 30;

  for (let i = 1; i <= amount; i += 1) {
    size += 10;
    const divEl = document.createElement('div');

    divEl.style.width = `${size}px`;
    divEl.style.height = `${size}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    divEl.style.border = 'solid grey 1px';
    divEl.style.marginBottom = 5 + 'px';

    boxesRef.appendChild(divEl);
  }
  inputRef.value = '';
}

function onCreateBtn() {
  createBoxes(inputRef.value);
}
function onDestroyBtn() {
  destroyBoxes();
}

function destroyBoxes() {
  boxesRef.innerHTML = '';
  inputRef.value = '';
}
