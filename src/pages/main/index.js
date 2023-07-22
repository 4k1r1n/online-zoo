import { createSlides, renderCardsToDom } from '../../components/PetsCarousel';
import { renderTestimonialsToDom, SCROLLBAR, TESTIMONIALS_CAROUSEL } from '../../components/TestimonialsCarousel';
import closePopup from '../../components/TestimonialPopUp';
import createDomNode from '../../utils/create-element';
import { BURGER, toggleBurgerMenu } from '../../components/Burger';

const backstageContent = document.querySelector('.backstage__content');
const imageBambooCap = createDomNode('img', 'backstage__image');
imageBambooCap.src = './assets/images/backstage/bamboo-cap.jpg';;
imageBambooCap.alt = 'Man in bamboo hat';
backstageContent.before(imageBambooCap);

let isBurgerOpen = false;

function resizeListener() {
  const popup = document.querySelector('.popup');

  if (window.innerWidth > 640 && popup) {
    closePopup();
  }

  if (window.innerWidth > 640 && BURGER.classList.contains('active')) {
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
