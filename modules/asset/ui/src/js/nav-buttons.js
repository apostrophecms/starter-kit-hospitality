export function navButton() {
  var navBtn = document.querySelector('.navigation__menu-btn');
  var navItems = document.querySelector('.navigation__nav-items');

	if (navBtn && navBtn !== null) {
	  navBtn.addEventListener('click', function () {
		if(!navItems.classList.contains('navigation__show')) {
			navItems.classList.add('navigation__show');			
		} else {
			navItems.classList.remove('navigation__show');
		}
	  });
	}
}
  