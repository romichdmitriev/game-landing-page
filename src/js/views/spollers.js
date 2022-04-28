import { _slideToggle, _slideUp } from '@js/utils/helpers';

function initLanguageMenu(languageItemsArray) {
  if (!languageItemsArray.length) return;

  const selectedLanguageText = document.querySelector('.langSelector__language');

  languageItemsArray.forEach((langItem) => {
    langItem.addEventListener('click', () => {
      const langTitle = langItem.dataset.lang;

      if (selectedLanguageText && langTitle) {
        selectedLanguageText.innerText = langTitle;
      }
    });
  });
}

function initDropdown(target) {
  if (!target) return;

  target?.addEventListener('click', () => {
    const dropdownMenu = target.querySelector('.langSelector__menu');
    _slideToggle(dropdownMenu, 500);
  });
}

function dropdown() {
  const langSelect = document.querySelector('.langSelector');
  const langItemsArray = document.querySelectorAll('[data-lang]');

  if (langSelect && langItemsArray) {
    initLanguageMenu(langItemsArray);
    initDropdown(langSelect);
  }

  // Закрытие при клике вне спойлера
  document.addEventListener('click', (e) => {
    const el = e.target;
    const targetMenu = document.querySelector('.langSelector__menu');

    if (!el.closest('.langSelector__menu') && targetMenu && !el.closest('.langSelector')) {
      const spollerSpeed = el.dataset.spollersSpeed ? parseInt(el.dataset.spollersSpeed, 10) : 500;

      targetMenu.classList.remove('.langSelector__menu_open');
      _slideUp(targetMenu, spollerSpeed);
    }
  });
}

export default dropdown;
