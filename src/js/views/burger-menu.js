function burgerMenu() {
  const burgerIconEl = document.querySelector('.burger-icon');
  const burgerMenuEl = document.querySelector('.burger-menu');

  const removeScrollFromDocument = () => {
    if (burgerMenuEl.classList.contains('header__burger-menu_open')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const handleOpenBurgerMenu = () => {
    burgerIconEl.classList.toggle('burger-icon_open');
    burgerMenuEl.classList.toggle('header__burger-menu_open');
  };

  if (burgerIconEl && burgerMenuEl) {
    burgerIconEl.addEventListener('click', () => {
      handleOpenBurgerMenu();
      removeScrollFromDocument();
    });
  }
}

export default burgerMenu;
