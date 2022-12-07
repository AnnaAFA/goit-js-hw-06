const listRef = document.querySelector('#categories').children.length;
console.log('Number of categories:', listRef);

const itemRef = document.querySelectorAll('.item');
// console.log(itemRef);

itemRef.forEach(el => {
  //   console.log(num);
  const textRef = el.querySelector('h2').textContent;
  console.log('Category:', textRef);

  const itemEl = el.querySelectorAll('li').length;
  console.log('Elements:', itemEl);
});
