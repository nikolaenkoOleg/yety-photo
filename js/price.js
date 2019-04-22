window.addEventListener('load', () => {
	const width = document.body.clientWidth;
	const selectWrapper1 = document.querySelector('.price__block-select-wrap-1');
	const selectWrapper2 = document.querySelector('.price__block-select-wrap-2');

	function createIndividualSelect() {
		let form = document.createElement('form');

		form.classList.add('price__block-form');
		form.innerHTML = `
			<select name="priceSelect">
				<option>Express</option>
				<option>Standart</option>
				<option>Premium</option>
			</select>
		`;

		selectWrapper1.appendChild(form);
	}

	if (width < 1200) {
		createIndividualSelect();
	}

});