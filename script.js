/*
  Небольшая интерактивность сайта без библиотек — подходит для GitHub Pages.
*/

const menuButton = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

// Открываем и закрываем выпадающее меню по кнопке.
menuButton.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

// После выбора раздела закрываем меню на мобильных и десктопных экранах.
document.querySelectorAll('.site-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

// Открываем описание проекта по нажатию на его заголовок.
document.querySelectorAll('[data-project-card]').forEach((card) => {
  const trigger = card.querySelector('.project-card__trigger');

  trigger.addEventListener('click', () => {
    const isOpen = card.classList.toggle('is-open');
    trigger.setAttribute('aria-expanded', String(isOpen));
  });
});
