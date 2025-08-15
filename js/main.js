/* Tiny slider */

const clientWidth = document.documentElement.clientWidth,
      sliderImgs = document.querySelectorAll('.slider img');
      sizeForDesctopImgs = [525, 300, 435, 300, 300, 300, 525, 525, 525],
      sizeForMobileImgs = [330, 187, 272, 187, 187, 187, 330, 330, 330];

if (clientWidth <= 788) {
  sliderImgs.forEach((img, i) => {
    img.setAttribute('width', sizeForMobileImgs[i]);
  })
} else {
  sliderImgs.forEach((img, i) => {
    img.setAttribute('width', sizeForDesctopImgs[i]);
  })
}

// Инициализируем слайдер и настраиваем его
const slider = tns({
  container: '.slider',

  items: 2.7,
  gutter: 10,
  mouseDrag: true,
  speed: 400,
  loop: false, // Ломает работу с lazyLoad

  autoWidth: true,
  lazyload: true,
  swipeAngle: false,
  preventScrollOnTouch: 'force', // непонятно, работает ли

  controlsContainer: '.locations__controls',
  nav: false
});

// Кнопки управления слайдером
const prevMobile = document.querySelector('.locations__controls--mobile .prev');
const nextMobile = document.querySelector('.locations__controls--mobile .next');

// Обращаемся к кнопкам и по событию клика вешаем на них методы перелистывания слайдера вперед и назад
prevMobile.onclick = () => slider.goTo('prev');
nextMobile.onclick = () => slider.goTo('next');