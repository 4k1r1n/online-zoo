import { hamburger, headerNavigation, headerCopyright, logoContainer, logoTitle } from "../js/constants.js";

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

function resizeListener() {
    if (window.innerWidth > 640 && hamburger.classList.contains('active')) {
        toggleHamburgerMenu();
    }
}

export { toggleHamburgerMenu, resizeListener }