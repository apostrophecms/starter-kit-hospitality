export function navButton() {
  var navBtn = document.querySelector('.navigation__menu-btn');
  
	if (navBtn && navBtn !== null) {
	  navBtn.addEventListener('click', function () {
		console.log('Hello World');
	  });
	}
}
  