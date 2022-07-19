const elements = {
	input: document.querySelector('input'),
	pAnswer: document.querySelector('.answer'),
	bear: document.querySelector('img'),
	pError: document.querySelector('.error'),
};

const answersArray = ['Yes', 'No', 'Maybe'];

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
		elements.pError.textContent = `Add a sign '?'`;
	} else {
		elements.pError.textContent = `Ask a question`;
	}
};

elements.bear.addEventListener('click', checkInput);
