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

const hideSlideIcon = () => {
  const iconSlider = document.querySelector('#goDown');
  if (iconSlider) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight / 15) {
        iconSlider.classList.add('navbar-dark');
        iconSlider.classList.remove('navbar-white');

      } else {
        iconSlider.classList.add('navbar-white');
        iconSlider.classList.remove('navbar-dark');

      }
    });
  }
}

const scrollSection = () => {

$(".scroll").click(function(event){
         event.preventDefault();
         //calculate destination place
         var dest=0;
         if($(this.hash).offset().top > $(document).height()-$(window).height()){
              dest=$(document).height()-$(window).height();
         }else{
              dest=$(this.hash).offset().top;
         }
         //go to destination
         $('html,body').animate({scrollTop:dest}, 1000,'swing');
     });
}

export { initUpdateNavbarOnScroll };
export { changeColorToggle };
export { scrollSection };