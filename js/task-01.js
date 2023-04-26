// const listRef = document.querySelector('#categories').children.length;
// console.log('Number of categories:', listRef);

// const itemRef = document.querySelectorAll('.item');
// // console.log(itemRef);

// itemRef.forEach(el => {
//   //   console.log(num);
//   const textRef = el.querySelector('h2').textContent;
//   console.log('Category:', textRef);

//   const itemEl = el.querySelectorAll('li').length;
//   console.log('Elements:', itemEl);
// });

// ___________________________________________________________

const listRef = document.querySelector('#categories');
// console.log(listRef);
const itemRef = document.querySelectorAll('.item h2');
// console.log(itemRef);

console.log('Number of categories:', listRef.children.length);

// console.log(itemRef);
itemRef.forEach(number => {
  console.log('Category:', number.textContent);
  console.log('Elements:', number.nextElementSibling.children.length);
  // console.log(number.length);
});
