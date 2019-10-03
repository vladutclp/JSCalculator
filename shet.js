
/*


// currentNumber, result = pt + sau - = operate(operatie ,0, current)

let input = "", result = "", operation = "", lastOperation = "";
function eventHandler(){
	let id = this.id;
	buttonEnable();
	switch(id){
		case "0":
			input += "0";
			display.textContent = input;
			displayTop.textContent += input;
			operation = "";
			break;

		case "1":
		
			input += "1";
			display.textContent = input;
			operation = "";
			displayTop.textContent += "1";
			break;

		case "2":
			input += "2";
			display.textContent = input;
			operation = "";
			displayTop.textContent += "2";
			break;

		case "3":
			input += "3";
			display.textContent = input;
			operation = "";
			displayTop.textContent += "3";
			break;

		case "4":
			
			input += "4";
			display.textContent = input;
			operation = "";
			displayTop.textContent += "4";
			break;

		case "5":
			input += "5";
			display.textContent = input;
			operation = "";
			displayTop.textContent += "5";
			break;

		case "6":
			input += "6";
			display.textContent = input;
			operation = "";
			displayTop.textContent += "6";
			break;

		case "7":
			input += "7";
			display.textContent = input;
			operation = "";
			displayTop.textContent += "7";
			break;

		case "8":
			input += "8";
			display.textContent = input;
			operation = "";
			displayTop.textContent += "8";
			break;

		case "9":
			input += "9";
			display.textContent = input;
			operation = "";
			displayTop.textContent += "9";
			break;


		case "+":
			
			operation = "+";
			displayTop.textContent += operation;
			display.textContent = operation;

			if(result == ""){
				result += input;
				console.log(result);
			
				input = "";
				console.log("L200 result = " + result);
				
			}
			else{
					
					result = operate(lastOperation, parseInt(result), parseInt(input));
					display.textContent = result;

				}

			input = "";
			lastOperation = operation;
			break;


		case "-":
		operation = "-";
		displayTop.textContent += operation;
		display.textContent = operation;
			
			if(result == ""){
				result += input;
				//console.log(result);
				//console.log(operation);
				input = "";
				console.log("L237 result = " + result);
			
			}
			else{
			
					result = operate(lastOperation, parseInt(result), parseInt(input));
					display.textContent = result;
					
					
			
			}
			input = "";
			lastOperation = operation;
			break;


		case "*":
			operation = "*";
			displayTop.textContent += operation;
			display.textContent = operation;
			
			if(result == ""){
				result += input;
				//console.log(result);
				//console.log(operation);
				input = "";
				console.log("input = " + input);
				console.log("result = " + result);
				console.log("3");
			}
			else{
					console.log("input = " + input);
					console.log("result = " + result);
					if(input == ""){
						result = operate(lastOperation, parseInt(result), parseInt(1));
					}else{
						result = operate(lastOperation, parseInt(result), parseInt(1));
					}
					console.log("\nAfter\ninput = " + input);
					console.log("result = " + result);
					//result = operate(lastOperation, parseInt(result), parseInt(1));
					display.textContent = result;
				}

			
			lastOperation = operation;	
			break;


		case "/":
			operation = "/";
			displayTop.textContent += operation;
			
			lastOperation = operation;
			if(result == ""){
				result += input;
				//console.log(result);
				//console.log(operation);
				input = "";
				console.log("4");
			}
			else{
			
					result = operate(lastOperation, parseInt(result), parseInt(1));
					display.textContent = result;

			}	
			lastOperation = operation;	
			break;


		case "=":
		

		console.log("In egal\nresult=" + result + "\ninput=" + input);
		result = operate(lastOperation, parseInt(result), parseInt(input));
		display.textContent = result;
		if(lastOperation == "+" || lastOperation == "-")
			input = 0;
		else
			input = "";
		console.log("input = " + input);
		console.log("result = " + result);
			break;

		case "clear":
			display.textContent = "";
			operation = "";
			result = "";
			input = "";

			break;
		default:


			break;

	}

}

*/




/*case "+":
		if(input == 1)
			input = 0;
		lastOperation = "+";
		display.textContent = lastOperation;
			if(operation == ""){
				operation = "+";
				
				
				console.log("3");
				if(result == ""){
					result += input;
					//console.log(result);
					//console.log(operation);
					input = "";
					console.log("4");
				}
				else{
					console.log("input = " + input + "\nresult= " + result);
					result = operate(lastOperation, parseInt(result), parseInt(input));
					display.textContent = result;
					console.log("5");

				}
			}
			input = "";
			break;

		case "-":
		if(input == 1)
			input = 0;
		lastOperation = "-";
		display.textContent = lastOperation;
		if(operation == ""){
			operation = "-";
			
			display.textContent = operation;
			console.log("3");
			if(result == ""){
				result += input;
				//console.log(result);
				//console.log(operation);
				input = "";
				console.log("4");
			}
			else{
				console.log("input = " + input + "\nresult= " + result);
				result = operate(lastOperation, parseInt(result), parseInt(input));
				display.textContent = result;
				console.log("5");

			}
		}
			input = "";
			break;

		case "*":
		if(input === 0)
			input = 1;
		lastOperation = "*";
		display.textContent = lastOperation;
		if(operation == ""){
			operation = "*";
			
			
			console.log("3");
			if(result == ""){
				result += input;
				//console.log(result);
				//console.log(operation);
				input = "";
				console.log("4");
			}
			else{
				console.log("input = " + input + "\nresult= " + result);
				result = operate(lastOperation, parseInt(result), parseInt(input));
				display.textContent = result;
				console.log("5");

			}
		}
		input = "";
			break;

		case "/":
		if(input === 0)
			input = 1;
		lastOperation = "/";
		display.textContent = lastOperation;
		if(operation == ""){
			operation = "/";
			
		
			console.log("3");
			if(result == ""){
				result += input;
				//console.log(result);
				//console.log(operation);
				input = "";
				console.log("4");
			}
			else{
				console.log("input = " + input + "\nresult= " + result);
				result = operate(lastOperation, parseInt(result), parseInt(input));
				display.textContent = result;
				console.log("5");
				console.log("result=" + result + " input = " + input);
			}
		}
		console.log("result=" + result + " input = " + input);
		input = "";
			break;

		case "=":
			console.log("= pressed");
			console.log(result);
			console.log(input);
			console.log(operation);
			result = operate(lastOperation, parseInt(result), parseInt(input));
			//display.textContent = parseFloat(result.toFixed(2));
			console.log(result);
			display.textContent = result;
			if(lastOperation == "+" || lastOperation == "-")
				input = 0;
			else
				if(lastOperation == "*" || lastOperation == "/")
					input = 1;
			operation = "";
			
			console.log("6");
			//resetCalculator();
			break;

		case "clear":
			display.textContent = "";
			operation = "";
			result = "";
			input = "";

			break;
*/