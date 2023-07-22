import { renderOverlay, removeOverlay } from './Overlay';

const BURGER = document.querySelector('.burger');
const HEADER = document.querySelector('.header');
const navigationItems = document.querySelectorAll('.navigation__item');

const toggleBurgerMenu = () => {
  HEADER.classList.toggle('active');
  BURGER.classList.toggle('active');
  document.body.classList.toggle('lock');
  toggleBurgerOverlay();
};

const toggleBurgerOverlay = () => {
  if (BURGER.classList.contains('active')) {
    renderOverlay(HEADER, toggleBurgerMenu);
  } else {
    removeOverlay(toggleBurgerMenu);
  }
};

BURGER.addEventListener('click', () => {
  toggleBurgerMenu();
});

navigationItems.forEach((navigationItem) => {
  navigationItem.addEventListener('click', () => {
    if (BURGER.classList.contains('active')) {
      toggleBurgerMenu();
    }
  });
});

export {
  BURGER, toggleBurgerMenu, renderOverlay, removeOverlay,
};
