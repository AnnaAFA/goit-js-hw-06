// const counterRef = document.querySelector('#counter');
// // console.log(counterRef);

// const decrementBtn = counterRef.children[0];
// const incrementBtn = counterRef.children[2];

// // console.log(incrementBtn);
// // console.log(decrementBtn);

// const valueRef = document.querySelector('#value');
// // console.log(valueRef.textContent);

// let counterValue = 0;

// incrementBtn.addEventListener('click', onIncrementClick);

// function onIncrementClick() {
//   counterValue += 1;
//   valueRef.textContent = counterValue;
// }

// decrementBtn.addEventListener('click', onDecrementClick);

// function onDecrementClick() {
//   counterValue -= 1;
//   valueRef.textContent = counterValue;
// }

// ____________________________________________________________________

const decrementRef = document.querySelector('[data-action="decrement"]');
const incrementRef = document.querySelector('[data-action="increment"]');
const spanRef = document.querySelector('#value');

let counterValue = 0;

decrementRef.addEventListener('click', onDecrementBtn);
incrementRef.addEventListener('click', onIncrementBtn);

function onDecrementBtn(e) {
  counterValue -= 1;
  spanRef.textContent = counterValue;
  // console.log(counterValue);
}

function onIncrementBtn(e) {
  counterValue += 1;
  spanRef.textContent = counterValue;
  // console.log(counterValue);
}
