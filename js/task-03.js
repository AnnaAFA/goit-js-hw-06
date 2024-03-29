const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const listRef = document.querySelector('.gallery');
// // console.log(listRef);

// const image = images.map(({ url, alt }) => {
//   const liRef = `<li><img src="${url}" alt="${alt}"  height="150px"></li>`;
//   return liRef;
// });
// // console.log(image);
// const imageStr = image.join('');
// console.log(imageStr);

// listRef.insertAdjacentHTML('beforeend', imageStr);

// __________________________________________________

const listRef = document.querySelector('.gallery');

const makeMarkup = ({ url, alt }) => {
  return `<li><img src="${url}" alt="${alt}" height=200></li>`;
};
// console.log(makeMarkup(images[0]));

const makeMarkupAll = images.map(makeMarkup).join('');
console.log(makeMarkupAll);

listRef.insertAdjacentHTML('beforeend', makeMarkupAll);
