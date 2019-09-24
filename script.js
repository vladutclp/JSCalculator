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

var firstValue = "", secondValue = "", operation = "";
let operationPressed = 0;

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

/*

button0.addEventListener("click", function(){
	if(operationPressed == 0 && secondValue == ""){
		firstValue += 0;
		display.textContent = firstValue;
	}
	else
		if(operationPressed == 1 && firstValue != ""){
			secondValue += 0;
			display.textContent = secondValue;
		}
})

button1.addEventListener("click", function(){
	if(operationPressed == 0 && secondValue == ""){
		firstValue += 1;
		display.textContent = firstValue;
		
	}
	else
		if(operationPressed == 1 && firstValue != ""){
			secondValue += 1;
			display.textContent = secondValue;
		}
		
})


button2.addEventListener("click", function(){
	if(operationPressed == 0 && secondValue == ""){
		firstValue += 2;
		display.textContent = firstValue;
	}
	else
		if(operationPressed == 1 && firstValue != ""){
			secondValue += 2;
			display.textContent = secondValue;
		}
		
})

button3.addEventListener("click", function(){
	if(operationPressed == 0 && secondValue == ""){
		firstValue += 3;
		display.textContent = firstValue;
	}
	else
		if(operationPressed == 1 && firstValue != ""){
			secondValue += 3;
			display.textContent = secondValue;
		}
		
})


button4.addEventListener("click", function(){
	if(operationPressed == 0 && secondValue == ""){
		firstValue += 4;
		display.textContent = firstValue;
	}
	else
		if(operationPressed == 1 && firstValue != ""){
			secondValue += 4;
			display.textContent = secondValue;
		}
		
})


button5.addEventListener("click", function(){
	if(operationPressed == 0 && secondValue == ""){
		firstValue += 5;
		display.textContent = firstValue;
	}
	else
		if(operationPressed == 1 && firstValue != ""){
			secondValue += 5;
			display.textContent = secondValue;
		}
		
})


button6.addEventListener("click", function(){
	if(operationPressed == 0 && secondValue == ""){
		firstValue += 6;
		display.textContent = firstValue;
	}
	else
		if(operationPressed == 1 && firstValue != ""){
			secondValue += 6;
			display.textContent = secondValue;
		}
		
})


button7.addEventListener("click", function(){
	if(operationPressed == 0 && secondValue == ""){
		firstValue += 7;
		display.textContent = firstValue;
	}
	else
		if(operationPressed == 1 && firstValue != ""){
			secondValue += 7;
			display.textContent = secondValue;
		}
		
})


button8.addEventListener("click", function(){
	if(operationPressed == 0 && secondValue == ""){
		firstValue += 8;
		display.textContent = firstValue;
	}
	else
		if(operationPressed == 1 && firstValue != ""){
			secondValue += 8;
			display.textContent = secondValue;
		}
		
})


button9.addEventListener("click", function(){
	if(operationPressed == 0 && secondValue == ""){
		firstValue += 9;
		display.textContent = firstValue;
	}
	else
		if(operationPressed == 1 && firstValue != ""){
			secondValue += 9;
			display.textContent = secondValue;
		}
		
})


plus.addEventListener("click", function(){
	operation += "+";
	operationPressed = 1;
	display.textContent = operation;

		
})


minus.addEventListener("click", function(){
	operation += "-";
	operationPressed = 1;
	display.textContent = operation;
		
})

mult.addEventListener("click", function(){
	operation += "*";
	operationPressed = 1;
	display.textContent = operation;

		
})

div.addEventListener("click", function(){
	operation += "/";
	operationPressed = 1;
	display.textContent = operation;

		
})


equal.addEventListener("click", function(){
	console.log("First value: " + firstValue + "\nSecond value: " + secondValue);
	operationPressed = 0;
	display.textContent = operate(operation, parseInt(firstValue), parseInt(secondValue));
	firstValue = "";
	secondValue = "";
	operation = "";	
})
clear.addEventListener("click", resetCalculator);
*/
function resetCalculator(){
	display.textContent = "";
	firstValue = "";
	secondValue = "";
	operation = "";
}







button0.addEventListener("click", eventHandler);
button1.addEventListener("click", eventHandler);
button2.addEventListener("click", eventHandler);
button3.addEventListener("click", eventHandler);
button4.addEventListener("click", eventHandler);
button5.addEventListener("click", eventHandler);
button6.addEventListener("click", eventHandler);
button7.addEventListener("click", eventHandler);
button8.addEventListener("click", eventHandler);
button9.addEventListener("click", eventHandler);
equal.addEventListener("click", eventHandler);
clear.addEventListener("click", eventHandler);
plus.addEventListener("click", eventHandler);
minus.addEventListener("click", eventHandler);
mult.addEventListener("click", eventHandler);
div.addEventListener("click", eventHandler);
//del = document.getElementById("DEL");
//punct = document.getElementById(".");

function eventHandler(){
	let id = this.id;

	switch(id){
		case "0":
			if(operationPressed == 0 && secondValue == ""){
				firstValue += 0;
				display.textContent = firstValue;
			}
			else
				if(operationPressed == 1 && firstValue != ""){
					secondValue += 0;
					display.textContent = secondValue;
				}
			break;

		case "1":
			if(operationPressed == 0 && secondValue == ""){
				firstValue += 1;
				display.textContent = firstValue;
			
			}
			else
				if(operationPressed == 1 && firstValue != ""){
					secondValue += 1;
					display.textContent = secondValue;
				}
			
			break;

		case "2":
			if(operationPressed == 0 && secondValue == ""){
				firstValue += 2;
				display.textContent = firstValue;
			
			}
			else
				if(operationPressed == 1 && firstValue != ""){
					secondValue += 2;
					display.textContent = secondValue;
				}
			
			break;

		case "3":
			if(operationPressed == 0 && secondValue == ""){
				firstValue += 3;
				display.textContent = firstValue;
			
			}
			else
				if(operationPressed == 1 && firstValue != ""){
					secondValue += 3;
					display.textContent = secondValue;
				}
			
			break;

		case "4":
			if(operationPressed == 0 && secondValue == ""){
				firstValue += 4;
				display.textContent = firstValue;
			
			}
			else
				if(operationPressed == 1 && firstValue != ""){
					secondValue += 4;
					display.textContent = secondValue;
				}
			
			break;

		case "5":
			if(operationPressed == 0 && secondValue == ""){
				firstValue += 5;
				display.textContent = firstValue;
			
			}
			else
				if(operationPressed == 1 && firstValue != ""){
					secondValue += 5;
					display.textContent = secondValue;
				}
			
			break;

		case "6":
			if(operationPressed == 0 && secondValue == ""){
				firstValue += 6;
				display.textContent = firstValue;
			
			}
			else
				if(operationPressed == 1 && firstValue != ""){
					secondValue += 6;
					display.textContent = secondValue;
				}
		
			break;

		case "7":
			if(operationPressed == 0 && secondValue == ""){
				firstValue += 7;
				display.textContent = firstValue;
			
			}
			else
				if(operationPressed == 1 && firstValue != ""){
					secondValue += 7;
					display.textContent = secondValue;
				}
		
			break;

		case "8":
			if(operationPressed == 0 && secondValue == ""){
				firstValue += 8;
				display.textContent = firstValue;
			
			}
			else
				if(operationPressed == 1 && firstValue != ""){
					secondValue += 8;
					display.textContent = secondValue;
				}
		
			break;

		case "9":
			if(operationPressed == 0 && secondValue == ""){
				firstValue += 9;
				display.textContent = firstValue;
			
			}
			else
				if(operationPressed == 1 && firstValue != ""){
					secondValue += 9;
					display.textContent = secondValue;
				}
		
			break;

		case "+":
			operation += "+";
			operationPressed = 1;
			display.textContent = operation;
				
			break;

		case "-":
			operation += "-";
			operationPressed = 1;
			display.textContent = operation;
		
			break;

		case "*":
			operation += "*";
			operationPressed = 1;
			display.textContent = operation;
		
			break;

		case "/":
			operation += "/";
			operationPressed = 1;
			display.textContent = operation;
		
			break;

		case "=":
			console.log("First value: " + firstValue + "\nSecond value: " + secondValue);
			operationPressed = 0;
			display.textContent = operate(operation, parseInt(firstValue), parseInt(secondValue)).toFixed(2);
			firstValue = "";
			secondValue = "";
			operation = "";	

			break;

		case "clear":
			resetCalculator();

			break;

		default:
			break;

	}

}

