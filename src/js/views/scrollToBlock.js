import { gotoBlock } from '@js/utils/helpers';

function ScrollToElements() {
  const init = () => {
    const elements = document.querySelectorAll('[data-href]');
    const burgerMenu = document.querySelector('.burger-menu');
    const burgerMenuIcon = document.querySelector('.burger-icon');

    elements.forEach((item) => {
      item.addEventListener('click', () => {
        const isOpenBurgerMenu = burgerMenu?.classList?.contains('header__burger-menu_open');

        if (burgerMenu && burgerMenuIcon && isOpenBurgerMenu) {
          burgerMenu.classList.toggle('header__burger-menu_open');
          burgerMenuIcon.classList.toggle('burger-icon_open');
          document.body.style.overflow = 'unset';
        }

        const path = item?.dataset?.href;
        gotoBlock(path ?? '', false, 1000);
      });
    });
  };

  init();
}

export default ScrollToElements;
