function Accordion() {
  // toggle active
  function toggleActive() {
    // set active class to target item to change cursor pointer
    document.querySelector('.accordion__item_active')?.classList?.remove('accordion__item_active');
    this.classList.add('accordion__item_active');

    // set active class to list sign
    document.querySelector('.accordion__item-sign_active')?.classList?.remove('accordion__item-sign_active');
    this.querySelector('.accordion__item-sign').classList.add('accordion__item-sign_active');

    // open body content
    document.querySelector('.accordion__content_open')?.classList?.remove('accordion__content_open');
    this.querySelector('.accordion__content').classList.add('accordion__content_open');
  }

  const init = () => {
    const elements = document.querySelectorAll('.accordion__item');

    if (!elements.length) return;

    elements.forEach((el) => {
      el.addEventListener('click', toggleActive);
    });
  };

  init();
}

export default Accordion;
