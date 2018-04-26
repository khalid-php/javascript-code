document.getElementById('loan-form').addEventListener('submit',loanResult);




function loanResult(e) {
	const amount = document.getElementById('amount');
	const interest = document.getElementById('interest');
	const years = document.getElementById('years');


	const monthlypay = document.getElementById('monthlypay');
	const totalpay = document.getElementById('totalpay');
	const intrestpay = document.getElementById('intrestpay');

	
	const principal = parseFloat(amount.value);		
	const calculatint= parseFloat(interest.value)/100/12;
	const calculatepay= parseFloat(years.value)*12;

	const x = Math.pow(1 + calculatint, calculatepay);
	const monthlypay1 =(principal*x*calculatint);
	

	if (isFinite(monthlypay1)) {
		monthlypay1.value =monthlypay1.toFixed(2);
		
		totalpay.value =(monthlypay1*calculatepay).toFixed(2);

		
		calculatint.value = ((monthlypay1*calculatepay)+principal).toFixed(2);
		
	} else {
	 	console.log('please check the number');
	 }
	e.preventDefault();
}