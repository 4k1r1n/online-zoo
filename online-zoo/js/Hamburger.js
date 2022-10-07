const hamburger = document.querySelector('.hamburger'),
    headerNavigation = document.querySelector('.header__navigation'),
    headerCopyright = document.querySelector('.header__copyright'),
    logoContainer = document.querySelector('.logo-container'),
    logoTitle = document.querySelector('.logo__title');

const createDomNode = (element, className) => {
    let node = document.createElement(element);
    node.classList.add(className);

    return node;
};

function toggleHamburgerMenu() {
    hamburger.classList.toggle('active');
    headerCopyright.classList.toggle('active');
    headerNavigation.classList.toggle('active');
    logoContainer.classList.toggle('active');
    logoTitle.classList.toggle('active');
    document.body.classList.toggle('lock');

    (hamburger.classList.contains('active')) ? addOverlay() : removeOverlay();
}

function addOverlay() {
    const overlay = createDomNode('div', 'overlay');
    logoContainer.after(overlay);
    window.getComputedStyle(overlay).opacity;
    overlay.classList.add('in');
}

function removeOverlay() {
    const overlay = document.querySelector('.overlay');
    window.getComputedStyle(overlay).opacity;
    overlay.classList.remove('in');

    overlay.addEventListener('transitionend', () => overlay.remove());
}

hamburger.addEventListener('click', () => {
    toggleHamburgerMenu();
});

export { toggleHamburgerMenu, hamburger }