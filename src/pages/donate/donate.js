import { HAMBURGER, toggleHamburgerMenu } from '../../js/Hamburger';
import setDefaultAmount from '../../js/AmountPanel';

function resizeListener() {
  if (window.innerWidth > 640 && HAMBURGER.classList.contains('active')) {
    toggleHamburgerMenu();
  }
}

window.addEventListener('resize', resizeListener);

window.onload = function load() {
  setDefaultAmount();
};
