import { createDomNode, removeOverlay, renderOverlayToDom } from './Hamburger.js';
import { TESTIMONIALS_CAROUSEL } from '../js/TestimonialsCarousel.js'

const TESTIMONIALS = document.querySelector('.testimonials');

const renderPopupToDom = () => {
    const popup = createDomNode('div', 'popup'),
        popupWrapper = createDomNode('div', 'popup__wrapper'),
        closeButton = createDomNode('span', 'close-button');

    TESTIMONIALS.append(popup);
    popup.append(popupWrapper);
    popupWrapper.append(closeButton);
}

const removePopupFromDom = () => {
    const popup = document.querySelector('.popup');
    TESTIMONIALS.removeChild(popup);
}

const addTestimonialToPopup = (currentTestimonial) => {
    const popupWrapper = document.querySelector('.popup__wrapper');
    popupWrapper.append(currentTestimonial.cloneNode(true));
}

const openPopup = () => {
    renderPopupToDom();
    const popup = document.querySelector('.popup');
    renderOverlayToDom(popup);
    document.body.classList.add('lock');
}

const closePopup = () => {
    document.body.classList.remove('lock');
    removePopupFromDom();
    removeOverlay();
}

TESTIMONIALS_CAROUSEL.addEventListener('click', e => {
    if (window.innerWidth <= 640) {
        openPopup();
        addTestimonialToPopup(e.target.closest('.testimonial'));
    }
})

TESTIMONIALS.addEventListener('click', e => {
    if (window.innerWidth <= 640 && e.target === document.querySelector('.close-button') || e.target === document.querySelector('.overlay')) {
        closePopup();
    }
})

export { closePopup }