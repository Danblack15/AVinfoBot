const approve = require('approvejs');

const rulesEmail = {
	required: true,
	email: true
}

const rulesPhone = {
	required: true,
	format: /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/
}

//submit pay form
const formPay = document.querySelector('.payment-modal__form')

formPay?.addEventListener("submit", (e) => {
	e.preventDefault()

	const data = {
		email: document.querySelector('.payment-modal__input[name=email]').value,
		phone: document.querySelector('.payment-modal__input[name=phone]').value
	}

	const checkEmail = approve.value(data.email, rulesEmail),
				checkPhone = approve.value(data.phone, rulesPhone)

	let errorMes = document.querySelector('.payment-modal__error')

	if (checkEmail.approved && checkPhone.approved) {
		errorMes.classList.remove("payment-modal__error--show")

		//POST
	} else
		errorMes.classList.add("payment-modal__error--show")

}, false)