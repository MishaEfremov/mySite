let tariffRadioButtons = document.querySelectorAll('input[type="radio"]');
let licenseQtySelect = document.querySelector('#licenceQty');
let totalPriceOutput = document.querySelector("#totalPrice");
let selectedPlanOutput = document.querySelector("#selectedPlan");
let tariffPlanSelected = '1';

let tariffPlanToPrice = {
	'1': 13,
	'2': 22,
	'3': 34
}



tariffRadioButtons.forEach(function (tariffButton) {
	tariffButton.addEventListener('change', function (event) {
		tariffPlanSelected = event.target.value;
		renderTotalPrice();
		renderSelectedPlan();
	})
})

licenseQtySelect.addEventListener('change', function (event) {
	renderTotalPrice();
});

function renderTotalPrice() {
	let tariffPrice = tariffPlanToPrice[tariffPlanSelected];
	let totalPriceValue = tariffPrice * parseInt(licenseQtySelect.value);
	totalPriceOutput.value = totalPriceValue;
}

function renderSelectedPlan() {
	selectedPlanOutput.value = '#' + tariffPlanSelected;
}