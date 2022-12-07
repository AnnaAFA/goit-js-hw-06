const counterRef = document.querySelector('#counter');
// console.log(counterRef);

const decrementBtn = counterRef.children[0];
const incrementBtn = counterRef.children[2];

// console.log(incrementBtn);
// console.log(decrementBtn);

const valueRef = document.querySelector('#value');
// console.log(valueRef.textContent);

let counterValue = 0;

incrementBtn.addEventListener('click', onIncrementClick);

function onIncrementClick() {
  counterValue += 1;
  valueRef.textContent = counterValue;
}

decrementBtn.addEventListener('click', onDecrementClick);

function onDecrementClick() {
  counterValue -= 1;
  valueRef.textContent = counterValue;
}
