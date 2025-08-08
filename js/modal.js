const openModalBtns = document.querySelectorAll('[ data-action="modal"]'),
      modal = document.querySelector('.modal'),
      closeModalBtn = document.querySelector('#closeModal img'),
      modalBody = document.querySelector('.modal__body');

openModalBtns.forEach(elem => {
  elem.addEventListener('click', () => {
    modal.classList.add('modal--open');

    document.body.classList.add('no-scroll');
  });
});

modal.addEventListener('click', e => {
  if (e.target === closeModalBtn || e.target === modal) {
    modal.classList.remove('modal--open');

    document.body.classList.remove('no-scroll');
  }
});