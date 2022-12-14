import Swiper from 'swiper'

export default new Swiper('.slider', {
  spaceBetween: 0,
  slidesPerView: 1,
  autoplay: {
    delay: 5000
  },
  navigation: {
    nextEl: '.slider__next',
    prevEl: '.slider__prev'
  },
  pagination: {
    el: '.slider__pagination',
    type: 'bullets',
    clickable: true,
    dynamicBullets: true
  }
})

