export default () => {
  // Your own project level JS may go here

  var navBtn = document.querySelector('.navigation__menu-btn');

  if (navBtn && navBtn !== null) {
    navBtn.addEventListener('click', function () {
      console.log('Hello World');
    });
  }

};
