let display = document.querySelector("#inputbox")
const audio = document.querySelector("#audio")
let currentInput = '';
let previousInput = '';
let operation= null;

function clickToDisplay(input){
    currentInput += input;
    display.value = currentInput;
    voiceButton();
}
function voiceButton(){
    audio.play();
}

function clearDisplay(){
    currentInput = '';
    previousInput = '';
    operation = null;
    display.value = "";
    voiceButton();
}

function operator(value){
    voiceButton();
    if(currentInput === '') return;
    if(previousInput !== ''){
        calculateResult();
    }
    operation = value;
    previousInput = currentInput;
    currentInput = '';
}

function calculateResult(){
    if(currentInput === '' || previousInput === '' || operation === null)
        return;
    
    let result;
    let value1 = parseFloat(currentInput);
    let value2 = parseFloat(previousInput);

    switch(operation){
        case '+':
            result = value2 + value1;
            break;
        case '-':
            result = value2 - value1;
            break;
        case '*':
            result = value2 * value1;
            break;
        case '/':
            result = value1 != 0 ? value2 / value1 : "Error";
            break;
        case '%':
            result = value1 % value2;
            break;    
        default:
        return;
    }

    display.value = result;
    currentInput = result.toString();
    previousInput = '';
    operation = null;
}



