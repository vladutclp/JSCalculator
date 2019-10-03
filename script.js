function add(a, b){
	return a + b;
}

function substract(a, b){
	return a - b;
}

function multiply(a, b){
	return a*b;
}

function divide(a, b){
	if(b == 0)
		return "Cannot divide by 0";
	else
		return a/b;
}


function operate(operator, a, b){

	switch(operator){
		case "+":
			return add(a, b);
			break;
		case "-":
			return substract(a, b);
			break;
		case "*":
			return multiply(a, b);
			break;
		case "/":
			return divide(a, b);
			break;
		default:
			break;
	}

}




const button0 = document.getElementById("0");
const button1 = document.getElementById("1");
const button2 = document.getElementById("2");
const button3 = document.getElementById("3");
const button4 = document.getElementById("4");
const button5 = document.getElementById("5");
const button6 = document.getElementById("6");
const button7 = document.getElementById("7");
const button8 = document.getElementById("8");

const button9 = document.getElementById("9");
const equal = document.getElementById("=");
const clear = document.getElementById("clear");
const plus = document.getElementById("+");
const minus = document.getElementById("-");
const mult = document.getElementById("*");
const div = document.getElementById("/");
const del = document.getElementById("DEL");
const punct = document.getElementById(".");

const display = document.getElementById("result");
const displayTop = document.getElementById("resultString");
function resetCalculator(){
	display.textContent = "";
	firstValue = "";
	secondValue = "";
	operation = "";
}
displayTop.textContent = "";

function initButtons(){
	plus.disabled = true;
	minus.disabled = true;
	div.disabled = true;
	mult.disabled = true;
	equal.disabled = true;
}

function buttonEnable(){
	plus.disabled = false;
	minus.disabled = false;
	div.disabled = false;
	mult.disabled = false;
	equal.disabled = false;
}

//initButtons();


button0.addEventListener("click", numberPressed);
button1.addEventListener("click", numberPressed);
button2.addEventListener("click", numberPressed);
button3.addEventListener("click", numberPressed);
button4.addEventListener("click", numberPressed);
button5.addEventListener("click", numberPressed);
button6.addEventListener("click", numberPressed);
button7.addEventListener("click", numberPressed);
button8.addEventListener("click", numberPressed);
button9.addEventListener("click", numberPressed);
equal.addEventListener("click", equalPress);
clear.addEventListener("click", clearScreen);
plus.addEventListener("click", operationPressed);
minus.addEventListener("click", operationPressed);
mult.addEventListener("click", operationPressed);
div.addEventListener("click", operationPressed);

del.addEventListener("click", deleteCharacter);
//punct = document.getElementById(".");


let actualValue = 0, storedValue = 0, operation = null, equalPressed = 0;

function numberPressed(){

	if(equalPressed){
			actualValue = 0;
			storedValue = 0;
			equalPressed = false;
		}
	number = parseInt(this.id);
	
	
	actualValue = (actualValue * 10) + number;
	console.log(actualValue);
	display.textContent = actualValue;


	equalPressed = false;

}


function operationPressed(){

	if(operation != null){
			actualValue = operate(operation, storedValue, actualValue);
			display.textContent = parseFloat(actualValue.toFixed(2));
	}

	operation = this.id;
	storedValue = actualValue;
	actualValue = 0;
	equalPressed = false;

}

function equalPress(){

	


	actualValue = operate(operation, storedValue, actualValue);
	
	display.textContent = parseFloat(actualValue.toFixed(2));
	
	operation = null;
	storedValue = actualValue;
	equalPressed = true;
}

function clearScreen(){
	display.textContent = "";
	actualValue = 0;
	storedValue = 0;
	operation = null;
	equalPressed = false;
}

function deleteCharacter(){
	display.textContent = display.textContent.substring(0, display.textContent.length - 1);
	actualValue = parseInt(actualValue/10);
	console.log(display.textContent);
	console.log("actual value = " + actualValue);
}

let a = ".3";
console.log(parseFloat(a));