import { burger, toggleBurgerMenu } from '../../js/Burger';
import setDefaultAmount from '../../js/AmountPanel';

function resizeListener() {
  if (window.innerWidth > 640 && burger.classList.contains('active')) {
    toggleBurgerMenu();
  }
}

window.addEventListener('resize', resizeListener);

window.onload = function load() {
  setDefaultAmount();
};
