import { renderOverlay, removeOverlay } from './Overlay';
import createDomNode from '../utils/create-element';
import { TESTIMONIALS_CAROUSEL } from './TestimonialsCarousel';

const TESTIMONIALS = document.querySelector('.testimonials');

const renderPopup = () => {
  const popup = createDomNode('div', 'popup active');
  const popupWrapper = createDomNode('div', 'popup__wrapper');
  const closeButton = createDomNode('span', 'close-button');
  TESTIMONIALS.append(popup);
  popup.append(popupWrapper);
  popupWrapper.append(closeButton);
  closeButton.addEventListener('click', closePopup);
};

const removePopup = () => {
  const popup = document.querySelector('.popup');
  popup.classList.remove('active');
  popup.addEventListener('transitionend', () => popup.remove());
};

const addTestimonialToPopup = (currentTestimonial) => {
  const popupWrapper = document.querySelector('.popup__wrapper');
  popupWrapper.append(currentTestimonial.cloneNode(true));
};

const openPopup = () => {
  renderPopup();
  const popup = document.querySelector('.popup');
  renderOverlay(popup, closePopup);
  document.body.classList.add('lock');
};

const closePopup = () => {
  document.body.classList.remove('lock');
  removeOverlay(closePopup);
  removePopup();
};

TESTIMONIALS_CAROUSEL.addEventListener('click', (e) => {
  if (window.innerWidth <= 640) {
    openPopup();
    addTestimonialToPopup(e.target.closest('.testimonial'));
  }
});

export default closePopup;
