import { hamburger } from "../js/constants.js";
import { toggleHamburgerMenu, resizeListener } from "../js/Hamburger.js";


hamburger.addEventListener('click', () => {
    toggleHamburgerMenu();
});

document.body.addEventListener('click', e => {
    if (e.target === document.querySelector('.overlay')) {
        toggleHamburgerMenu();
    }
})

window.addEventListener("resize", resizeListener);



