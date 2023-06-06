import { HAMBURGER, toggleHamburgerMenu } from '../../js/Hamburger.js';
import { createSlides, renderCardsToDom } from '../../js/PetsCarousel.js';
import { renderTestimonialsToDom, SCROLLBAR, TESTIMONIALS_CAROUSEL } from '../../js/TestimonialsCarousel.js';
import { closePopup } from '../../js/TestimonialPopUp.js';

function resizeListener() {
    if (window.innerWidth > 640 && HAMBURGER.classList.contains('active')) {
        toggleHamburgerMenu();
    }

    (window.innerWidth <= 1220) ? SCROLLBAR.max = '8' : SCROLLBAR.max = '7';

    if (window.innerWidth <= 980 || (window.innerWidth > 980 && window.innerWidth <= 1220)) {
        TESTIMONIALS_CAROUSEL.style.right = '0px';
        SCROLLBAR.value = '0';
    }

    if (window.innerWidth > 640) {
        closePopup();
    }
}

window.addEventListener('resize', resizeListener);

window.onload = function () {
    createSlides();

    const slides = document.querySelectorAll('.slide');
    [...slides].forEach(slide => {
        renderCardsToDom(slide);
    })

    renderTestimonialsToDom();

    (window.innerWidth <= 1220) ? SCROLLBAR.max = '8' : SCROLLBAR.max = '7';
}



