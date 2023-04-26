// const colorNumber = document.querySelector('.color');
// // console.log(colorNumber);
// const changeBtn = document.querySelector('.change-color');

// changeBtn.addEventListener('click', onChangeBtn);

// function onChangeBtn() {
//   function getRandomHexColor() {
//     return `#${Math.floor(Math.random() * 16777215)
//       .toString(16)
//       .padStart(6, 0)}`;
//   }
//   colorNumber.textContent = getRandomHexColor();
//   document.body.style.backgroundColor = colorNumber.textContent;
// }

// _____________________________________________________________

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnRef = document.querySelector('.change-color');
const spanRef = document.querySelector('.color');

btnRef.addEventListener('click', onBtnChange);

function onBtnChange() {
  document.body.style.backgroundColor = getRandomHexColor();
  spanRef.textContent = getRandomHexColor();
  // console.log(spanRef.textContent);
  // console.dir(getRandomHexColor());
}
