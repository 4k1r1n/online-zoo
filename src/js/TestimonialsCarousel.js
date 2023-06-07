import testimonials from '../data/testimonials';

const TESTIMONIALS_CAROUSEL = document.querySelector('.testimonials__carousel');
const SCROLLBAR = document.querySelector('.scrollbar');

const createTestimonialTemplate = (id) => `<div class="testimonial">
    <div class="testimonial__header">
        <span class="icon icon--avatar-user${testimonials[id].avatar}"></span>
        <div class="testimonial__info">
            <p class="testimonial__author">${testimonials[id].author}</p>
            <div class="testimonial__row">
                <p class="testimonial__location">${testimonials[id].location}</p>
                <p class="testimonial__date">${testimonials[id].date}</p>
            </div>
        </div>
    </div>
    <div class="testimonial__text">${testimonials[id].text}
    </div>
</div>`;

const renderTestimonialsToDom = () => {
  for (let i = 0; i < 11; i += 1) {
    TESTIMONIALS_CAROUSEL.innerHTML += createTestimonialTemplate(i);
  }
};

const moveTestimonial = () => {
  const testimonialWidth = document.querySelector('.testimonial').offsetWidth;
  const stepScroll = +SCROLLBAR.value;
  TESTIMONIALS_CAROUSEL.style.right = `${(testimonialWidth + 29) * stepScroll}px`;
};

SCROLLBAR.addEventListener('input', moveTestimonial);

export {
  renderTestimonialsToDom, moveTestimonial, SCROLLBAR, TESTIMONIALS_CAROUSEL,
};
