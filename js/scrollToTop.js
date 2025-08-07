const scrollBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', e => {
  if (window.pageYOffset > window.innerHeight) {
    scrollBtn.classList.add('top-link--visible');
  } else {
    scrollBtn.classList.remove('top-link--visible');
  }
})