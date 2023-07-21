import createDomNode from '../utils/create-element';

const burger = document.querySelector('.burger');
const header = document.querySelector('.header');
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
  header.classList.toggle('active');
  burger.classList.toggle('active');
  document.body.classList.toggle('lock');
  toggleOverlay();
};

const toggleOverlay = () => {
  if (burger.classList.contains('active')) {
    renderOverlayToDom(header);
  } else {
    removeOverlay();
  }
};

burger.addEventListener('click', () => {
  toggleBurgerMenu();
});

navigationItems.forEach((navigationItem) => {
  navigationItem.addEventListener('click', () => {
    if (burger.classList.contains('active')) {
      toggleBurgerMenu();
    }
  });
});

export { burger, toggleBurgerMenu };
