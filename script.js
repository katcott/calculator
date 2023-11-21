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
    document.getElementById("calcScreen").innerText=""; 
    firstNumber =  secondNumber = operator = result = null; 
    console.log("clear");
}

function displayNumber(num){
    calcScreen.innerText += num;
}

function addOperator(operatorButton){
    if(firstNumber === null && result === null){
        firstNumber = calcScreen.innerText;
        firstOperator = operatorButton.innerText;
    }
    if(firstNumber !==null && result === null){
        secondNumber = calcScreen.innerText;
        operate();
    }
    if(result && firstNumber){
        firstNumber = result;
    }
    console.log(firstNumber);
    console.log(secondNumber);
    console.log(result);
    calcScreen.innerText = "";
}


function add(numberOne, numberTwo){
    return numberOne + numberTwo;
}

function subtract(numberOne, numberTwo){
    return numberOne - numberTwo;
}

function multiply(numberOne, numberTwo){
    return numberOne * numberTwo;
}

function divide(numberOne, numberTwo){
    return (numberOne / numberTwo);
}

function operate(){
    secondNumber = calcScreen.innerText;
    if(result){
        firstNumber = result;
    }
    if(operator === "+"){
        result = add(firstNumber, secondNumber);
    }
    else if(operator === "-"){
        result = subtract(firstNumber, secondNumber);
    }
    else if(operator ==="x"){
        result = multiply(firstNumber, secondNumber);
    }
    else if(operator === "÷"){
        result = divide(firstNumber, secondNumber);
    }
    calcScreen.innerText = result;
    console.log(result);
    firstNumber = null;
    secondNumber = null;
}

