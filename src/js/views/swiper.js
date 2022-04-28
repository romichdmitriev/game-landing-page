// import Swiper JS
import Swiper, { EffectCards, Navigation, Pagination, A11y } from 'swiper';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import 'swiper/css/a11y';

const initSwiper = () => {
  const swiper = new Swiper('.mySwiper', {
    effect: 'cards',
    grabCursor: true,
    speed: 600,
    cardsEffect: {
      rotate: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet(index, className) {
        return `<span class="${className} gallery__pagination-bullet"></span>`;
      },
    },
    navigation: {
      nextEl: '.gallery__buttons-next',
      prevEl: '.gallery__buttons-prev',
    },
    modules: [EffectCards, Navigation, Pagination, A11y],
  });
};

export default initSwiper;
