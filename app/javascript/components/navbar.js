const initUpdateNavbarOnScroll = () => {
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight / 10) {
        navbar.classList.add('navbar-lewagon-white');
      } else {
        navbar.classList.remove('navbar-lewagon-white');
      }
    });
  }
}

const changeColorToggle = () => {
  const navbar = document.querySelector('.navbar-toggler-icon');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight / 10) {
        navbar.classList.add('navbar-dark');
        navbar.classList.remove('navbar-white');

      } else {
        navbar.classList.add('navbar-white');
        navbar.classList.remove('navbar-dark');

      }
    });
  }
}

export { initUpdateNavbarOnScroll };
export { changeColorToggle };
