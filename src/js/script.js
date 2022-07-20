// alert(`You could use enter :)`);
const elements = {
	input: document.querySelector('#question'),
	ball: document.querySelector('#eight-ball'),
	eight: document.querySelector('#eight'),
	answer: document.querySelector('#answer'),
	error: document.querySelector('#error'),
};
const btns = {
	btnBear: document.querySelector('#bear'),
	btnBall: document.querySelector('#ball'),
};
const divsBoxes = {
	boxBall: document.querySelector('.box-ball'),
	boxBear: document.querySelector('.box-bear'),
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
	elements.answer.innerHTML = `${answersArray[number]}`;
};
const shakeBall = () => {
	elements.ball.classList.add('shake-animation');
	setTimeout(checkInput, 1000);
};

const addFunctionBall = () => {
	divsBoxes.boxBall.classList.add('show');
	divsBoxes.boxBear.classList.remove('show');
};
const addFunctionBear = () => {
	divsBoxes.boxBear.classList.add('show');
	divsBoxes.boxBall.classList.remove('show');
};

// const toggleFunctionBall = () => {
// 	divsBoxes.boxBall.classList.toggle('show');
// };
// const toggleFunctionBear = () => {
// 	divsBoxes.boxBear.classList.toggle('show');
// };
// const checkFunction = () => {
// 	if (divsBoxes.boxBall.classList.contains('show')) {
// 		divsBoxes.boxBear.classList.remove('show');
// 	}
// };
const checkInput = () => {
	elements.ball.classList.remove('shake-animation');

	if (elements.input.value !== '' && elements.input.value.endsWith('?')) {
		generateAnswer();
		elements.error.textContent = '';
		elements.eight.textContent = '';
	} else if (
		elements.input.value !== '' &&
		elements.input.value.endsWith('?') !== '?'
	) {
		elements.error.textContent = `Add a sign '?'`;
		elements.eight.textContent = '8';
		elements.answer.textContent = '';
	} else {
		elements.error.textContent = `Ask a question`;
		elements.eight.textContent = '8';
		elements.answer.textContent = '';
	}
};

btns.btnBear.addEventListener('click', addFunctionBear);
btns.btnBall.addEventListener('click', addFunctionBall);
elements.ball.addEventListener('click', shakeBall);
document.addEventListener('keydown', (e) => {
	const enter = e.key;
	if (enter === 'Enter') {
		shakeBall();
	}
});
