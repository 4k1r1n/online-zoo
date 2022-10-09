import { HAMBURGER, toggleHamburgerMenu } from '../../js/Hamburger.js';
import { setDefaultAmount } from '../../js/AmountPanel.js';


function resizeListener() {
    if (window.innerWidth > 640 && HAMBURGER.classList.contains('active')) {
        toggleHamburgerMenu();
    }
}

window.addEventListener('resize', resizeListener);

window.onload = function () {
    setDefaultAmount();
}