let displayValue = ''; // Current value displayed
let firstOperand = null; // First operand for calculations
let secondOperand = null; // Second operand for calculations
let currentOperation = null; // Current operation to be performed

function appendNumber(number) {
    displayValue += number; // Append number to display
    updateDisplay(); // Update display
}

function setOperation(operation) {
    if (currentOperation !== null) {
        calculateResult(); // Calculate result if operation already set
    }
    firstOperand = parseFloat(displayValue); // Set first operand
    currentOperation = operation; // Set current operation
    displayValue = ''; // Clear display for next input
}

function clearDisplay() {
    displayValue = ''; // Clear display
    firstOperand = null; // Reset first operand
    secondOperand = null; // Reset second operand
    currentOperation = null; // Reset operation
    updateDisplay(); // Update display
}

function calculateResult() {
    secondOperand = parseFloat(displayValue); // Set second operand
    if (currentOperation && firstOperand !== null && secondOperand !== null) {
        switch (currentOperation) {
            case '+':
                displayValue = (firstOperand + secondOperand).toString(); // Addition
                break;
            case '-':
                displayValue = (firstOperand - secondOperand).toString(); // Subtraction
                break;
            case '*':
                displayValue = (firstOperand * secondOperand).toString(); // Multiplication
                break;
            case '/':
                displayValue = (secondOperand !== 0) ? (firstOperand / secondOperand).toString() : 'Error'; // Division
                break;
            case '^':
                displayValue = Math.pow(firstOperand, secondOperand).toString(); // Exponentiation
                break;
            default:
                break;
        }
        updateDisplay(); // Update display
        firstOperand = null; // Reset first operand
        secondOperand = null; // Reset second operand
        currentOperation = null; // Reset operation
    }
}

function updateDisplay() {
    document.getElementById('display').value = displayValue; // Update display element
}

function calculateSquareRoot() {
    if (displayValue !== '') {
        displayValue = Math.sqrt(parseFloat(displayValue)).toString(); // Square root
        updateDisplay(); // Update display
    }
}

function calculatePower() {
    setOperation('^'); // Set operation to exponentiation
}

function calculateLog() {
    if (displayValue !== '') {
        displayValue = Math.log10(parseFloat(displayValue)).toString(); // Logarithm
        updateDisplay(); // Update display
    }
}

function calculateSin() {
    if (displayValue !== '') {
        displayValue = Math.sin(parseFloat(displayValue)).toString(); // Sine
        updateDisplay(); // Update display
    }
}
