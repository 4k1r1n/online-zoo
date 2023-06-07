import { createDomNode, renderOverlayToDom } from './Hamburger';
import { TESTIMONIALS_CAROUSEL } from './TestimonialsCarousel';

const TESTIMONIALS = document.querySelector('.testimonials');

const renderPopupToDom = () => {
  const popup = createDomNode('div', 'popup');
  const popupWrapper = createDomNode('div', 'popup__wrapper');
  const closeButton = createDomNode('span', 'close-button');

  TESTIMONIALS.append(popup);
  popup.append(popupWrapper);
  popupWrapper.append(closeButton);
};

const removePopupFromDom = () => {
  const popup = document.querySelector('.popup');
  TESTIMONIALS.removeChild(popup);
};

const addTestimonialToPopup = (currentTestimonial) => {
  const popupWrapper = document.querySelector('.popup__wrapper');
  popupWrapper.append(currentTestimonial.cloneNode(true));
};

const openPopup = () => {
  renderPopupToDom();
  const popup = document.querySelector('.popup');
  renderOverlayToDom(popup);
  document.body.classList.add('lock');
};

TESTIMONIALS_CAROUSEL.addEventListener('click', (e) => {
  if (window.innerWidth <= 640) {
    openPopup();
    addTestimonialToPopup(e.target.closest('.testimonial'));
  }
});
