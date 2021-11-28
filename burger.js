let burgerBtn = document.querySelector('.nav-burger');
let burgerMenu = document.querySelector('.burger-menu');
let body = document.querySelector('body');

burgerBtn.addEventListener('click', function (evt) {
   evt.stopPropagation();
   if (burgerMenu.classList.contains('no-active-menu')) {
      burgerMenu.classList.add('active-menu');
      burgerMenu.classList.remove('no-active-menu');
   } else {
      burgerMenu.classList.remove('active-menu');
      burgerMenu.classList.add('no-active-menu');
   }
});



body.addEventListener('click', function () {
   if (burgerMenu.classList.contains('active-menu')) {
      burgerMenu.classList.remove('active-menu');
      burgerMenu.classList.add('no-active-menu');
   }
});