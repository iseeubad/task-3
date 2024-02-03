let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let firstOperand = '';


function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}
function setOperator(op) {
    operator = op;
    if (currentInput !== '') {
        firstOperand = currentInput;
        currentInput = '';
        updateDisplay();
    }
}


function calculateResult() {
    if (operator !== '' && firstOperand !== '' && currentInput !== '') {
        let result;
        switch (operator) {
            case '+':
                result = parseFloat(firstOperand) + parseFloat(currentInput);
                break;
            case '-':
                result = parseFloat(firstOperand) - parseFloat(currentInput);
                break;
            case '*':
                result = parseFloat(firstOperand) * parseFloat(currentInput);
                break;
            case '/':
                if (parseFloat(currentInput) !== 0) {
                    result = parseFloat(firstOperand) / parseFloat(currentInput);
                } else {
                    result = 'Error';
                }
                break;
            default:
                result = 'Error';
                break;
        }
        currentInput = result.toString();
        operator = '';
        firstOperand = '';
        updateDisplay();
    }
}
function appendDecimalPoint() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
    }
}
function calculateSquareRoot() {
    if (currentInput !== '') {
        if (parseFloat(currentInput) >= 0) {
            let result = Math.sqrt(parseFloat(currentInput));
            currentInput = result.toString();
            operator = '';
            firstOperand = '';
            updateDisplay();
        } else {
            showError("Error");
        }
    }
}
function showError(message) {
    currentInput = message;
    operator = '';
    firstOperand = '';
    updateDisplay();
}
function AC() {
    currentInput = '';
    operator = '';
    firstOperand = '';
    updateDisplay();
}
function DE(){
    currentInput = currentInput.substring(0, currentInput.length - 1);
    updateDisplay();
}
function updateDisplay() {
    display.value = currentInput;
}
