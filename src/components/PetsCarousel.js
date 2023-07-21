import pets from '../data/pets';

const BTN_LEFT = document.querySelector('.button-left');
const BTN_RIGHT = document.querySelector('.button-right');
const PETS_CAROUSEL = document.querySelector('.pets__carousel');

const createCardTemplate = (id) => `<div class="card block-bordered">
<div class="card__image-container">
    <img src=${pets[id].src} alt="${pets[id].name}" class="card__image">
</div>
<div class="card__info">
    <div class="card__text">
        <p class="card__name">${pets[id].name}</p>
        <p class="card__title">${pets[id].location}</p>
    </div>
    <span class="icon icon--${pets[id].type}"></span>
</div>
</div>`;

const createSlides = () => {
  for (let i = 0; i < 3; i += 1) {
    const slide = document.createElement('div');
    slide.classList.add('slide');
    PETS_CAROUSEL.appendChild(slide);
  }
};

const shuffle = (array) => array.sort(() => Math.random() - 0.5);

const renderCardsToDom = (slide) => {
  shuffle(pets);
  for (let i = 0; i < 6; i += 1) {
    slide.innerHTML += createCardTemplate(i);
  }
};

const moveLeft = () => {
  PETS_CAROUSEL.classList.add('transition-left');
  BTN_LEFT.removeEventListener('click', moveLeft);
  BTN_RIGHT.removeEventListener('click', moveRight);
};

const moveRight = () => {
  PETS_CAROUSEL.classList.add('transition-right');
  BTN_LEFT.removeEventListener('click', moveLeft);
  BTN_RIGHT.removeEventListener('click', moveRight);
};

BTN_LEFT.addEventListener('click', moveLeft);
BTN_RIGHT.addEventListener('click', moveRight);

PETS_CAROUSEL.addEventListener('animationend', (e) => {
  const slides = document.querySelectorAll('.slide');

  if (e.animationName === 'move-left') {
    PETS_CAROUSEL.classList.remove('transition-left');
    PETS_CAROUSEL.insertBefore(slides[slides.length - 1], slides[0]);
  } else {
    PETS_CAROUSEL.classList.remove('transition-right');
    PETS_CAROUSEL.insertBefore(slides[0], slides[slides.length]);
  }

  BTN_LEFT.addEventListener('click', moveLeft);
  BTN_RIGHT.addEventListener('click', moveRight);
});

PETS_CAROUSEL.addEventListener('animationstart', (e) => {
  const slides = document.querySelectorAll('.slide');

  if (e.animationName === 'move-left') {
    slides[0].innerHTML = '';
    renderCardsToDom(slides[0]);
  } else {
    slides[slides.length - 1].innerHTML = '';
    renderCardsToDom(slides[slides.length - 1]);
  }
});

export { createSlides, renderCardsToDom };
