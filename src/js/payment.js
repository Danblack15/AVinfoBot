const changeModalBtn = document.querySelectorAll('.change-modal-btn'),
	payModal = document.querySelector('.payment__modal')

function hideModal() {
	payModal.classList.add('payment__modal--hide')
	setTimeout(() => {
		payModal.classList.remove('payment__modal--show')
		payModal.classList.remove('payment__modal--hide')
		document.body.style.overflow = 'auto'
	}, 200)
}

changeModalBtn?.forEach((btn) => {
	btn.addEventListener('click', () => {
		if (payModal && payModal.classList.contains('payment__modal--show')) {
			hideModal()
		} else if (payModal) {
			payModal.classList.add('payment__modal--show')
			document.body.style.overflow = 'hidden'
		}
	})
})

payModal?.addEventListener('click', function (e) {
	if (!document.querySelector('.payment-modal__body').contains(e.target))
		hideModal()
})