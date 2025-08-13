const topics = document.querySelectorAll('.topic');

topics.forEach(topic => topic.addEventListener('click', e => {
  if (e.target.closest('.topic__btn')) {
    const isOpened = topic.classList.toggle('topic--open'),
          img = topic.querySelector('.topic__icon'),
          content = topic.querySelector('.topic__content');

    if (isOpened) {
      img.src = './img/icons/btn-minus.svg';
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      img.src = './img/icons/btn-plus.svg';
      content.style.maxHeight = '';
    }
  }
}))