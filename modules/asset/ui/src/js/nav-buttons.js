export function navButton() {
  if (document.querySelector('.navigation__menu-btn')) {
    const navBtn = document.querySelector('.navigation__menu-btn');
    const navItems = document.querySelector('.navigation__nav-items');

    navBtn.addEventListener('click', function () {
      navItems.classList.toggle('navigation__show');
    });
  }
}
