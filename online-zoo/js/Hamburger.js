const HAMBURGER = document.querySelector('.hamburger'),
    headerNavigation = document.querySelector('.header__navigation'),
    headerCopyright = document.querySelector('.header__copyright'),
    logoContainer = document.querySelector('.logo-container'),
    logoTitle = document.querySelector('.logo__title'),
    header = document.querySelector('.header');

const createDomNode = (element, className) => {
    let node = document.createElement(element);
    node.classList.add(className);

    return node;
};

const toggleHamburgerMenu = () => {
    HAMBURGER.classList.toggle('active');
    headerCopyright.classList.toggle('active');
    headerNavigation.classList.toggle('active');
    logoContainer.classList.toggle('active');
    logoTitle.classList.toggle('active');
    document.body.classList.toggle('lock');

    (HAMBURGER.classList.contains('active')) ? renderOverlayToDom(header) : removeOverlay();
}

const renderOverlayToDom = (element) => {
    const overlay = createDomNode('div', 'overlay');
    element.append(overlay);
    window.getComputedStyle(overlay).opacity;
    overlay.classList.add('in');
}

const removeOverlay = () => {
    const overlay = document.querySelector('.overlay');
    window.getComputedStyle(overlay).opacity;
    overlay.classList.remove('in');
    overlay.addEventListener('transitionend', () => overlay.remove());
}

HAMBURGER.addEventListener('click', e => {
    toggleHamburgerMenu();
});

document.body.addEventListener('click', e => {
    if (e.target === document.querySelector('.overlay') && HAMBURGER.classList.contains('active')) {
        toggleHamburgerMenu();
    }
})

export { toggleHamburgerMenu, HAMBURGER, createDomNode, removeOverlay, renderOverlayToDom }