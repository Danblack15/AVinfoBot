import { CountUp } from "countup.js"

const numbers = document.querySelectorAll('.charts__chart-value')

window.addEventListener('DOMContentLoaded', () => {
	numbers.forEach(number => {
		let id = number.getAttribute('id'),
				value = Number(number.getAttribute('data-value'))

		let countUp = new CountUp(
			id,
			value,
			{
				duration: 1.2,
				suffix: '%'
			}
		);

		countUp.start()
	});
})