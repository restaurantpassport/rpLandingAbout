class NavBar {
  constructor(element) {
    this.element = element;
    this.mobileBtn = element.querySelector('.nav-mobile-btn');
    this.mobileMenu = element.querySelector('#mobile-nav-menu');
  
    this.mobileBtn.addEventListener('click', (e) => {
      this.openMobileNav(e);
    });
  }
  openMobileNav(e) {
    e.preventDefault();
    this.mobileMenu.classList.toggle('open');
  }
}

const topNav = document.querySelectorAll('.top-nav');

topNav.forEach(navbar => new NavBar(navbar));

