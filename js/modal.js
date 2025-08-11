const openModalBtns = document.querySelectorAll('[ data-action="modal"]'),
      modal = document.querySelector('.modal'),
      closeModalBtn = document.querySelector('#closeModal img'),
      modalBody = document.querySelector('.modal__body');

openModalBtns.forEach(elem => {
  elem.addEventListener('click', () => {
    modal.classList.add('modal--open');

    // добавляем отступ справа для компенсации отсутствия браузерного скролла, 
    // чтобы весь сайт не смещался вправо во время открытия модального окна,
    // ширина отступа равна ширине скролла
    document.body.style.paddingRight = window.innerWidth - document.body.clientWidth + 'px';
    document.body.classList.add('no-scroll');

    // скрываем кнопку прокрутки наверх
    hideScrollBtn();
  });
});

modal.addEventListener('click', e => {
  if (e.target === closeModalBtn || e.target === modal) {
    modal.classList.remove('modal--open');
    
    window.ontransitionend = () => {
      // убираем добавленный отступ справа и возвращаем браузерный скролл только 
      // после окончания анимации закрытия модального окна
      document.body.style.paddingRight = '';
      document.body.classList.remove('no-scroll');

      // показываем кнопку прокрутки наверх
      showScrollBtn();

      window.ontransitionend = null;
    }
  }
});