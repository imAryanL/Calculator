# Web Calculator

## Description
A simple web calculator application that supports basic arithmetic operations as well as some scientific functions like square root, power, logarithm, and sine.

![calc](https://github.com/user-attachments/assets/c066f022-27ef-4218-9ea2-df6bdf775a68)

## Features
- Basic arithmetic operations: addition, subtraction, multiplication, and division.
- Scientific operations: square root, power, logarithm, and sine.

## Technologies Used
- HTML
- CSS
- JavaScript
- Bootstrap 4.5

## Usage
1. Open `index.html` in your web browser.
2. Use the buttons to perform calculations.

## How to Run
1. Clone the repository or download the project files.
2. Open `index.html` in any web browser.
3. Use the buttons to perform calculations.

## JavaScript Explanation
The `script.js` file contains the following:

### Variables
- **displayValue**: Stores the current value displayed on the calculator.
- **firstOperand**: Stores the first number in the calculation.
- **secondOperand**: Stores the second number in the calculation.
- **currentOperation**: Stores the current operation to be performed.

### Functions
#### `appendNumber(number)`
- **Purpose**: Appends a number to the current display value.

#### `setOperation(operation)`
- **Purpose**: Sets the current operation and prepares for the next operand.

#### `clearDisplay()`
- **Purpose**: Clears the display and resets all variables.

#### `calculateResult()`
- **Purpose**: Calculates the result of the current operation.

#### `updateDisplay()`
- **Purpose**: Updates the calculator display with the current value.

#### `calculateSquareRoot()`
- **Purpose**: Calculates the square root of the current display value.

#### `calculatePower()`
- **Purpose**: Sets the current operation to exponentiation.

#### `calculateLog()`
- **Purpose**: Calculates the logarithm (base 10) of the current display value.

#### `calculateSin()`
- **Purpose**: Calculates the sine of the current display value.


