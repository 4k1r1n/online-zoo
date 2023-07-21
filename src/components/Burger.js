import createDomNode from '../utils/create-element';

const BURGER = document.querySelector('.burger');
const HEADER = document.querySelector('.header');
const navigationItems = document.querySelectorAll('.navigation__item');

const renderOverlayToDom = (element) => {
  const overlay = createDomNode('div', 'overlay');
  element.append(overlay);
  requestAnimationFrame(() => {
    overlay.classList.add('in');
  });
  overlay.addEventListener('click', toggleBurgerMenu);
};

const removeOverlay = () => {
  const overlay = document.querySelector('.overlay');
  overlay.classList.remove('in');
  overlay.addEventListener('transitionend', () => overlay.remove());
  overlay.removeEventListener('click', toggleBurgerMenu);
};

const toggleBurgerMenu = () => {
  HEADER.classList.toggle('active');
  BURGER.classList.toggle('active');
  document.body.classList.toggle('lock');
  toggleOverlay();
};

const toggleOverlay = () => {
  if (BURGER.classList.contains('active')) {
    renderOverlayToDom(HEADER);
  } else {
    removeOverlay();
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

export { BURGER, toggleBurgerMenu };
