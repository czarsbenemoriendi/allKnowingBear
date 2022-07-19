const elements = {
	input: document.querySelector('input'),
	pAnswer: document.querySelector('.answer'),
	bear: document.querySelector('.ball'),
	pError: document.querySelector('.error'),
};

const answersArray = [
	'It is certain',
	'It is decidedly so',
	'Without a doubt',
	'Yes - definitely',
	'You may rely on it',
	'As I see it, yes',
	'Most likely',
	'Outlook good',
	'Yes',
	'Signs point to yes',
	"Don't count on it",
	'My reply is no',
	'My sources say no',
	'Outlook not so good',
	'Very doubtful',
	'Reply hazy, try again',
	'Ask again later',
	'Better not tell you now',
	'Cannot predict now',
	'Concentrate and ask again',
];

const generateAnswer = () => {
	const number = Math.floor(Math.random() * answersArray.length);
	elements.pAnswer.innerHTML = `${answersArray[number]}`;
	console.log(number);
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
