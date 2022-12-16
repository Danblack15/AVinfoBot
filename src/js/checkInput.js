const approve = require('approvejs');

const rulesVin = {
	required: true,
	format: /^[A-HJ-NPR-Za-hj-npr-z\d]{8}[\dX][A-HJ-NPR-Za-hj-npr-z\d]{2}\d{6}$/
},
rulesNumber = {
	required: true,
	format: /^[АВЕКМНОРСТУХ]\d{3}(?<!000)[АВЕКМНОРСТУХ]{2}\d{2,3}$/
},
rulesPTS = {
	required: true,
	format: /^\d{1,2}[A-Za-z]{2}\d{6}$/
}

const inputDataCar = document.querySelector('.input-data-car')

inputDataCar?.addEventListener("submit", (e) => {
	e.preventDefault()

	const data = document.querySelector('#data-car').value

	const checkVin = approve.value(data, rulesVin),
        checkNumber = approve.value(data, rulesNumber),
        checkPTS = approve.value(data, rulesPTS)

	if (checkVin.approved) {
		console.log('success VIN')

		//POST
	} else if (checkNumber.approved){
        console.log('success Number')

        //POST
    } else if (checkPTS.approved) {
        console.log('success PTS')

        //POST
    } else {
        console.log('error')
    }
}, false)