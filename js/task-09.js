const colorNumber = document.querySelector('.color');
// console.log(colorNumber);
const changeBtn = document.querySelector('.change-color');

changeBtn.addEventListener('click', onChangeBtn);

function onChangeBtn() {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  colorNumber.textContent = getRandomHexColor();
  document.body.style.backgroundColor = colorNumber.textContent;
}
