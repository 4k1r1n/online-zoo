import createDomNode from '../utils/create-element';

const renderOverlay = (element, onclick) => {
  const overlay = createDomNode('div', 'overlay');
  element.append(overlay);
  requestAnimationFrame(() => {
    overlay.classList.add('in');
  });
  overlay.addEventListener('click', onclick);
};

const removeOverlay = (onclick) => {
  const overlay = document.querySelector('.overlay');
  overlay.classList.remove('in');
  overlay.addEventListener('transitionend', () => overlay.remove());
  overlay.removeEventListener('click', onclick);
};

export { removeOverlay, renderOverlay };
