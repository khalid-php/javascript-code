// let min= 1,
// 	max= 10,
// 	winningNum=2,
// 	guessLeft=3;

	// const game = document.querySelector('#game'),
	// 	minNum = document.querySelector('.min-num'),
	// 	maxNum= document.querySelector('.max-num'),
	// 	guessBtn = document.querySelector('#guessBtn'),
	// 	guessInput= document.querySelector('#guessInput'),
	// 	massage=document.querySelector('.massage');

	// 	minNum.Context= min;
	// 	maxNum.Context=max;

	// 	 guessBtn.addEventListener('click',function() {
	// 	let guess = parseInt(guessInput.value);
	// 	 console.log(guessInput);

	//  });
	let answer=3;
for (let i=1; i<10;i++) {
	var guess = prompt('enter the no');
	if (answer==guess) {
		alert('your are correct answer');
		break;
	} else {
		alert('sorry rong choice');
		
	}
}