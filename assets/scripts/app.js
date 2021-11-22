const defaultResult = 0;
let currentResult = defaultResult;

/* gets input from input field */
function getUserNumberInput() {
  return parseInt(userInput.value);
}

/* generates and write calculation log */

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function add() {
  const enteredNumber = getUserNumberInput();
  currentResult = currentResult + enteredNumber;
  const initialResult = currentResult;
  createAndWriteOutput('+', currentResult, initialResult, enteredNumber);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  currentResult = currentResult - enteredNumber;
  const initialResult = currentResult;
  createAndWriteOutput('-', currentResult, initialResult, enteredNumber);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  currentResult = currentResult * enteredNumber;
  const initialResult = currentResult;
  createAndWriteOutput('*', currentResult, initialResult, enteredNumber);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  currentResult = currentResult / enteredNumber;
  const initialResult = currentResult;
  createAndWriteOutput('/', currentResult, initialResult, enteredNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

outputResult(currentResult, calcDescription);
