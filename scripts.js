let move = 0;
let isFound  = false;

function displayMove(btn){
	if (move == 0){
		document.getElementById(btn).value = "X";
		document.getElementById(btn).disabled = true;
		move = 1;
	} else {
		document.getElementById(btn).value = "O";
		document.getElementById(btn).disabled = true;
		move = 0;
	}

	checkMove(btn);
}

function reset(){
	const btns = ["btn1","btn2", "btn3", "btn4", "btn5", "btn6", "btn7", "btn8", "btn9"];

	for (let i = 0; i<btns.length; i++) {
		document.getElementById(btns[i]).value = "  ";
		document.getElementById(btns[i]).disabled = false;
	}
	move = 0;
}

function checkMove(btn) {
	let btn1 = document.getElementById("btn1").value;
	let btn2 = document.getElementById("btn2").value;
	let btn3 = document.getElementById("btn3").value;
	let btn4 = document.getElementById("btn4").value;
	let btn5 = document.getElementById("btn5").value;
	let btn6 = document.getElementById("btn6").value;
	let btn7 = document.getElementById("btn7").value;
	let btn8 = document.getElementById("btn8").value;
	let btn9 = document.getElementById("btn9").value;

	let btnsValue = [[btn1, btn2, btn3], [btn4, btn5, btn6], [btn7, btn8, btn9]];
	const placement = ["btn1","btn2", "btn3", "btn4", "btn5", "btn6", "btn7", "btn8", "btn9"];

	// check for tie
	var ctr = 0;
	for(var i = 0; i < btnsValue.length; i++){
		for(var j = 0; j < btnsValue[i].length; j++){
			if(btnsValue[i][j] == "  ") break;
			else ctr+=1;
		}
		if(ctr==9) window.alert("Tie. Game over.");
	}

	/*
	 * 
	 * TODO: Checks if odd or even placement
	 * EVEN: checks only vertical and horizontal
	 * ODD : checks vertical, horizontal, and diagonal
	 * 
	 */

	let btn_placement = placement.indexOf(btn);
	let user = document.getElementById(btn).value;


	// find row & column
	let col = btn_placement%3;

	let row = 0;
	if(btn_placement < 3) {
		row = 0;
	} else if(btn_placement < 6) {
		row = 1;
	} else if(btn_placement < 9) {
		row = 2;
	} 

	// check row
	if(btnsValue[row][0] == user && btnsValue[row][1] == user && btnsValue[row][2] == user){
		window.alert(user + " has won!");
	}

	// check col
	if(btnsValue[0][col] == user && btnsValue[1][col] == user && btnsValue[2][col] == user){
		window.alert(user + " has won!");
	}

	console.log(btn_placement);
	// check diagonal
	if(btn_placement%2 == 0){
		// left to right
		if(btnsValue[0][0] == user && btnsValue[1][1] == user && btnsValue[2][2] == user){
			window.alert(user + " has won!");
		}

		// right to left
		if(btnsValue[0][2] == user && btnsValue[1][1] == user && btnsValue[2][0] == user){
			window.alert(user + " has won!");
		}
	}

}