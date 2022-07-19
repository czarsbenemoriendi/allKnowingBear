const elements = {
	input: document.querySelector('input'),
	pAnswer: document.querySelector('.answer'),
	bear: document.querySelector('img'),
	pError: document.querySelector('.error'),
};

const answersArray = ['Tak', 'Nie', 'Może'];

const generateAnswer = () => {
	const number = Math.floor(Math.random() * 3);
	elements.pAnswer.innerHTML = `${answersArray[number]}`;
};

const checkInput = () => {
	if (elements.input.value !== '' && elements.input.value.endsWith('?')) {
		generateAnswer();
		elements.pError.textContent = '';
	} else if (
		elements.input.value !== '' &&
		elements.input.value.endsWith('?') !== '?'
	) {
		elements.pError.textContent = `Musisz dopisać znak '?'`;
	} else {
		elements.pError.textContent = `Zadaj pytanie`;
	}
};

elements.bear.addEventListener('click', checkInput);
