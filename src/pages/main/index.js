import { HAMBURGER, toggleHamburgerMenu } from '../../js/Hamburger';
import { createSlides, renderCardsToDom } from '../../js/PetsCarousel';
import { renderTestimonialsToDom, SCROLLBAR, TESTIMONIALS_CAROUSEL } from '../../js/TestimonialsCarousel';
// import closePopup from '../../js/TestimonialPopUp';
import '../../sass/style.scss';
import { burger, toggleBurgerMenu } from '../../components/Burger';

const backstageContent = document.querySelector('.backstage__content');
const imageBambooCap = document.createElement('img');
imageBambooCap.src = './assets/images/backstage/bamboo-cap.jpg';
imageBambooCap.alt = 'Man in bamboo hat';
imageBambooCap.classList.add('backstage__image');
backstageContent.before(imageBambooCap);

let isBurgerOpen = false;

function resizeListener() {
  if (window.innerWidth > 640 && burger.classList.contains('active')) {
    toggleBurgerMenu();
    isBurgerOpen = true;
  }

  if (window.innerWidth <= 640 && isBurgerOpen) {
    toggleBurgerMenu();
    isBurgerOpen = false;
  }

  if (window.innerWidth <= 1220) {
    SCROLLBAR.max = '8';
  } else {
    SCROLLBAR.max = '7';
  }

  if (window.innerWidth <= 980 || (window.innerWidth > 980 && window.innerWidth <= 1220)) {
    TESTIMONIALS_CAROUSEL.style.right = '0px';
    SCROLLBAR.value = '0';
  }
}

window.addEventListener('resize', resizeListener);

createSlides();

const slides = document.querySelectorAll('.slide');
[...slides].forEach((slide) => renderCardsToDom(slide));

renderTestimonialsToDom();

if (window.innerWidth <= 1220) {
  SCROLLBAR.max = '8';
} else {
  SCROLLBAR.max = '7';
}
