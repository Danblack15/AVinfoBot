const listLI = document.querySelectorAll('.more-info__open-info')

listLI?.forEach((li) => {
	li.addEventListener('click', (e) => {
		let dopText = li.parentElement.querySelector('.more-info__dop-text')

		if (dopText.classList.contains('more-info__dop-text--opened')) {
			dopText.classList.remove('more-info__dop-text--opened')
			li.classList.remove('more-info__open-info--active')
		} else {
			dopText.classList.add('more-info__dop-text--opened')
			li.classList.add('more-info__open-info--active')
		}
	})
})

const openInfo = document.querySelector('.more-info__head')

openInfo?.addEventListener('click', () => {
	const popup = document.querySelector('.more-info__text'),
		arrows = document.querySelectorAll('.more-info__img-js'),
		changeText = document.querySelector('.more-info__open-text')

	if (popup.classList.contains('more-info__text--active')) {
		popup.classList.remove('more-info__text--active')
		changeText.textContent = 'Раскрыть'

		arrows.forEach((arrow) => arrow.classList.remove('more-info__img-js--active'))
	} else {
		popup.classList.add('more-info__text--active')
		changeText.textContent = 'Свернуть'

		arrows.forEach((arrow) => arrow.classList.add('more-info__img-js--active'))
	}
})