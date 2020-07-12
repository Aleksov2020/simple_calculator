let rezult = 0;
let num = 0;
let gl = "";

function cl(){
	rezult = 0;
	updateStr(rezult);
}

function digit(number){
	rezult *= 10;
	rezult += number;
	updateStr(rezult);
}

function arifm(mark){
	if (gl == "") {
		num = rezult;
		console.log(num);
		gl = mark;
	}	
	if (gl == '+') {
		num += rezult;
		console.log(num);
		gl = "";
	}

	if (mark == 'answ') {
		updateStr(num);
	} else { cl(); }

}

function updateStr(result){
	document.getElementById("result").textContent = result;
}