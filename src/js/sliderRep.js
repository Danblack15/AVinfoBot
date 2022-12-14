import Swiper from 'swiper';

export default new Swiper('.examples-rep-slider', {
	spaceBetween: -40,
	slidesPerView: 1,
	autoplay: {
		delay: 5250
	},
	pagination: {
		el: '.examples-rep-slider__pagination',
		type: 'bullets',
		clickable: true,
		dynamicBullets: true
	},
	breakpoints: {
		501: {
			spaceBetween: -70,
			slidesPerView: 1,
		}
	}
});
