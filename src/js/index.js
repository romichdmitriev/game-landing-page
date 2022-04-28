// Импорт модулей для работы с заготовками
import * as Components from '@js/views';

// import icons to convert sprite in runtime
import arrow from '../assets/icons/arrow.svg';
import scrolldown from '../assets/icons/scroll-down.svg';
import nextButton from '../assets/icons/next-el-arrow.svg';
import table from '../assets/icons/disquette.svg';
import twitter from '../assets/icons/twitter.svg';
import facebook from '../assets/icons/facebook.svg';
import youtube from '../assets/icons/youtube.svg';
import twitch from '../assets/icons/twitch.svg';

document.addEventListener('DOMContentLoaded', () => {
  Components.dropdown();
  Components.swiper();
  Components.accordion();
  Components.scrollToBlock();
  Components.burgerMenu();
  Components.animationOnScroll();
});
