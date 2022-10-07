import { hamburger, toggleHamburgerMenu } from '../js/Hamburger.js';
import { } from '../js/PetsCarousel.js';

hamburger.addEventListener('click', () => {
    toggleHamburgerMenu();
});

document.body.addEventListener('click', e => {
    if (e.target === document.querySelector('.overlay')) {
        toggleHamburgerMenu();
    }
})

function resizeListener() {
    if (window.innerWidth > 640 && hamburger.classList.contains('active')) {
        toggleHamburgerMenu();
    }
}

window.addEventListener("resize", resizeListener);



