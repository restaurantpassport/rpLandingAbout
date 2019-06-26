class NavBar {
  constructor(element) {
    this.element = element;
    this.mobileBtn = element.querySelector('.nav-mobile-btn');
    this.mobileMenu = element.querySelector('#mobile-nav-menu');

    this.mobileBtn.addEventListener('click', () => {
      this.openMobileNav();
    });
    this.mobileBtn.addEventListener('touchstart', (e) => {
      e.preventDefault();
      this.openMobileNav();
    });
  }
  openMobileNav(e) {
    this.mobileMenu.classList.toggle('open');
  }
}

const topNav = document.querySelectorAll('.top-nav');

topNav.forEach(navbar => new NavBar(navbar));