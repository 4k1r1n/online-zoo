const HAMBURGER = document.querySelector('.hamburger');
const headerNavigation = document.querySelector('.header__navigation');
const headerCopyright = document.querySelector('.header__copyright');
const logoContainer = document.querySelector('.logo-container');
const logoTitle = document.querySelector('.logo__title');
const header = document.querySelector('.header');

const createDomNode = (element, className) => {
  const node = document.createElement(element);
  node.classList.add(className);
  return node;
};

const renderOverlayToDom = (element) => {
  const overlay = createDomNode('div', 'overlay');
  element.append(overlay);
  overlay.classList.add('in');
};

const removeOverlay = () => {
  const overlay = document.querySelector('.overlay');
  overlay.classList.remove('in');
  overlay.addEventListener('transitionend', () => overlay.remove());
};

const toggleHamburgerMenu = () => {
  HAMBURGER.classList.toggle('active');
  headerCopyright.classList.toggle('active');
  headerNavigation.classList.toggle('active');
  logoContainer.classList.toggle('active');
  logoTitle.classList.toggle('active');
  document.body.classList.toggle('lock');

  if (HAMBURGER.classList.contains('active')) {
    renderOverlayToDom(header);
  } else {
    removeOverlay();
  }
};

HAMBURGER.addEventListener('click', () => {
  toggleHamburgerMenu();
});

document.body.addEventListener('click', (e) => {
  if (e.target === document.querySelector('.overlay') && HAMBURGER.classList.contains('active')) {
    toggleHamburgerMenu();
  }
});

export {
  toggleHamburgerMenu, HAMBURGER, createDomNode, renderOverlayToDom,
};
