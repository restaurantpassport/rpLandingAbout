const mobileMenuBtn = document.querySelector('.nav-mobile-btn');
const mobileMenu = document.querySelector('#mobile-nav-menu');

mobileMenuBtn.addEventListener('click', openMenu);

function openMenu(e) {
  mobileMenu.classList.toggle('open');
}