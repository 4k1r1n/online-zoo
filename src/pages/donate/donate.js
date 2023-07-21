import { BURGER, toggleBurgerMenu } from '../../components/Burger';
import setDefaultAmount from '../../components/AmountPanel';

function resizeListener() {
  if (window.innerWidth > 640 && BURGER.classList.contains('active')) {
    toggleBurgerMenu();
  }
}

window.addEventListener('resize', resizeListener);

window.onload = function load() {
  setDefaultAmount();
};
