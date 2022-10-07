import pets from '../js/pets.js';

const BTN_LEFT = document.querySelector('.button-left'),
    BTN_RIGHT = document.querySelector('.button-right'),
    CAROUSEL = document.querySelector('.carousel');

const createCardTemplate = (id) => {
    return `<div class="card block-bordered">
<div class="card__image-container">
    <img src=${pets[id].urlToImage} alt="${pets[id].name}" class="card__image">
</div>
<div class="card__info">
    <div class="card__text">
        <p class="card__name">${pets[id].name}</p>
        <p class="card__title">${pets[id].location}</p>
    </div>
    <span class="icon icon--${pets[id].type}"></span>
</div>
</div>`;
}

const createSlides = () => {
    for (let i = 0; i < 3; i++) {
        let slide = document.createElement('div');
        slide.classList.add('slide');
        CAROUSEL.appendChild(slide);
    }
}

const renderCardsToDom = (slide) => {
    shuffle(pets);

    for (let i = 0; i < 6; i++) {
        slide.innerHTML += createCardTemplate(i);
    }
}

const shuffle = array => {
    return array.sort(() => Math.random() - 0.5);
}

const moveLeft = () => {
    CAROUSEL.classList.add('transition-left');
    BTN_LEFT.removeEventListener('click', moveLeft);
    BTN_RIGHT.removeEventListener('click', moveRight);
};

const moveRight = () => {
    CAROUSEL.classList.add('transition-right');
    BTN_LEFT.removeEventListener('click', moveLeft);
    BTN_RIGHT.removeEventListener('click', moveRight);
};

BTN_LEFT.addEventListener("click", moveLeft);
BTN_RIGHT.addEventListener("click", moveRight);


CAROUSEL.addEventListener('animationend', e => {
    const slides = document.querySelectorAll('.slide');

    if (e.animationName === 'move-left') {
        CAROUSEL.classList.remove('transition-left');
        CAROUSEL.insertBefore(slides[slides.length - 1], slides[0]);
    } else {
        CAROUSEL.classList.remove('transition-right');
        CAROUSEL.insertBefore(slides[0], slides[slides.length]);
    }

    BTN_LEFT.addEventListener("click", moveLeft);
    BTN_RIGHT.addEventListener("click", moveRight);
})

CAROUSEL.addEventListener('animationstart', e => {
    const slides = document.querySelectorAll('.slide');

    if (e.animationName === 'move-left') {
        slides[0].innerHTML = "";
        renderCardsToDom(slides[0]);
    } else {
        slides[slides.length - 1].innerHTML = "";
        renderCardsToDom(slides[slides.length - 1]);
    }
})

window.onload = function () {
    createSlides();

    const slides = document.querySelectorAll('.slide');
    [...slides].forEach(slide => {
        renderCardsToDom(slide);
    })
}

export { }
