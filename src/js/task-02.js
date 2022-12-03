const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

// const itemRef = document.createElement('li');
// itemRef.textContent = ingredients[0];
// itemRef.classList.add('item');
// console.log(itemRef);

const listRef = document.querySelector('#ingredients');
// console.log(listRef);

// ------------------------------------

// const elements = [];
// for (let i = 0; i < ingredients.length; i += 1) {
// console.log(ingredients[i]);
//   const itemRef = document.createElement('li');
//   itemRef.textContent = ingredients[i];
//   itemRef.classList.add('item');
//   elements.push(itemRef);
// }
// console.log(elements);
// listRef.append(...elements);

// -------------------------------------

const elements = ingredients.map(el => {
  const itemRef = document.createElement('li');
  itemRef.textContent = el;
  itemRef.classList.add('item');
  return itemRef;
});
console.log(elements);
listRef.append(...elements);

// --------------------------------------

// const makeMarkup = markup => {
//   return markup.map(el => {
//     const itemRef = document.createElement('li');
//     itemRef.textContent = el;
//     itemRef.classList.add('item');
//     return itemRef;
//   });
// };
// const elements = makeMarkup(ingredients);
// listRef.append(...elements);
