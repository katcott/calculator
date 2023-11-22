let firstNumber = null
let secondNumber = null;
let firstOperator = null;
let secondOperator = null;
let result = null;

function addEventListeners(){
    document.querySelector("#btnOne").addEventListener("click", function(){displayNumber(btnOne.innerText)});
    document.querySelector("#btnTwo").addEventListener("click", function(){displayNumber(btnTwo.innerText)});
    document.querySelector("#btnThree").addEventListener("click", function(){displayNumber(btnThree.innerText)});
    document.querySelector("#btnFour").addEventListener("click", function(){displayNumber(btnFour.innerText)});
    document.querySelector("#btnFive").addEventListener("click", function(){displayNumber(btnFive.innerText)});
    document.querySelector("#btnSix").addEventListener("click", function(){displayNumber(btnSix.innerText)});
    document.querySelector("#btnSeven").addEventListener("click", function(){displayNumber(btnSeven.innerText)});
    document.querySelector("#btnEight").addEventListener("click", function(){displayNumber(btnEight.innerText)});
    document.querySelector("#btnNine").addEventListener("click", function(){displayNumber(btnNine.innerText)});
    document.querySelector("#btnZero").addEventListener("click", function(){displayNumber(btnZero.innerText)});
    document.querySelector("#btnPlus").addEventListener("click", function(){addOperator(btnPlus)});
    document.querySelector("#btnMinus").addEventListener("click", function(){addOperator(btnMinus)});
    document.querySelector("#btnTimes").addEventListener("click", function(){addOperator(btnTimes)});
    document.querySelector("#btnDivide").addEventListener("click", function(){addOperator(btnDivide)});
    document.querySelector("#btnDecimal").addEventListener("click", function(){displayNumber(btnDecimal.innerText)})
    document.querySelector("#btnClear").addEventListener("click", function(){clear()});
    document.querySelector("#btnEquals").addEventListener("click", function(){operate()});
}

function clear(){
    calcScreen.innerText = "";
    firstNumber = secondNumber = firstOperator = secondOperator = result = null;
}

function displayNumber(num){
    calcScreen.innerText += num;
}

function addOperator(operatorButton){
    if(!firstNumber)
        firstNumber = calcScreen.innerText;
    else if(!secondNumber){
        secondNumber = calcScreen.innerText;
        calcScreen.innerText = "";
        operate();
    }
    if(!firstOperator)
        firstOperator = button.innerText;
    else if(!secondOperator)
        secondOperator = button.innerText;
    calcScreen.innerText = "";
}


function add(numberOne, numberTwo){
    return parseFloat(numberOne) + parseFloat(numberTwo);
}

function subtract(numberOne, numberTwo){
    return parseFloat(numberOne) - parseFloat(numberTwo);
}

function multiply(numberOne, numberTwo){
    return parseFloat(numberOne) * parseFloat(numberTwo);
}

function divide(numberOne, numberTwo){
    return parseFloat(numberOne) / parseFloat(numberTwo);
}

function operate(){
        if(!firstNumber)
        return calcScreen.innerText = "ERROR";
    if(!secondNumber)
        secondNumber = calcScreen.innerText;
    if(!secondOperator){
        switch (firstOperator){
            case "-":
                result = subtract(firstNumber, secondNumber)
                break;
            case "+":
                result = add(firstNumber, secondNumber);
                break;
            case "x":
                result = multiply(firstNumber, secondNumber);
                break;
            case "÷":
                result = divide(firstNumber, secondNumber);
                break;
        }
        firstNumber = result;
        calcScreen.innerText = result;
    }
    if(secondOperator){
        secondNumber = calcScreen.innerText;
        switch (secondOperator){
            case "-":
                result = subtract(firstNumber, secondNumber)
                break;
            case "+":
                result = add(firstNumber, secondNumber);
                break;
            case "x":
                result = multiply(firstNumber, secondNumber);
                break;
            case "÷":
                result = divide(firstNumber, secondNumber);
                break;
        }
        calcScreen.innerText = result;
    }
}

