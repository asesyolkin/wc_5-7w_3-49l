const scrollBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', e => {
  if (window.pageYOffset > window.innerHeight) {
    scrollBtn.classList.add('top-link--visible');
  } else {
    scrollBtn.classList.remove('top-link--visible');
  }
})

function showScrollBtn() {
  scrollBtn.style.display = 'flex';
}

function hideScrollBtn() {
  scrollBtn.style.display = 'none';
}