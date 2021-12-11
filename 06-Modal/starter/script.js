'use strict';
let removeItem = document.getElementById('popupWindow');
/* let removeItem = document.querySelector('.modal hidden'); */
document
  .querySelector('.show-modal')
  .addEventListener('click', function (event) {
    removeItem.classList.remove('hidden');
    console.log('hi');
  });

// close window using X
document.querySelector('.close-modal').addEventListener('click', function (e) {
  /*   let i = '.hidden';
  for (i = 1; i < 1; i++) { */
  removeItem.classList.add('hidden');
});
// close window using Esc
window.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key == 'Escape') {
    removeItem.classList.add('hidden');
  }
});

document;
let bruh = document.getElementsByClassName('.show-modal');

bruh.addEventListener('click', function (event) {});

/* window.addEventListener('keydown', e => {
  console.log(e.key);
}); */
