const mobileNavBtnOpen = document.getElementById('openMobileNav');
const mobileNav = document.querySelector('.mobile-nav');
const mobileNavLinks = mobileNav.querySelectorAll('a, button'); // сюда попадают Лого, кнопка Закрыть, пункты меню с кнопкой Оставить заявку

// OPEN NAV
mobileNavBtnOpen.addEventListener('click', () => {
  mobileNav.classList.add('mobile-nav--open');
  document.body.classList.add('no-scroll');
})

// CLOSE NAV
mobileNavLinks.forEach(elem => {
  elem.addEventListener('click', () => {
    mobileNav.classList.remove('mobile-nav--open');
    document.body.classList.remove('no-scroll');
  });
});