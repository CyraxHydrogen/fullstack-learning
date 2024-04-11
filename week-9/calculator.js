let inputEquation = document.querySelector('.input-equation');
let input = document.querySelector('.calculator-input');
let buttons = document.querySelectorAll('.calculator-btn');
let operatorButtons = document.querySelectorAll('.operator-btn');
let inputHistoryButton = document.querySelector('.input-history-button');
let inputHistory = document.querySelector('.input-history');
let inputHistoryList = document.querySelector('.input-history-list');

let addItemToInputHistoryList = function () {
  let div = document.createElement('DIV');

  div.innerHTML = 'Test';

  inputHistoryList.appendChild(div);
};

function calculateResult() {
  let inputValue = input.value;
  let result = '';

  try {
    result = eval(inputValue);
  } catch (e) {
    result = 'ERROR';
  }

  if (result === 'ERROR') {
    inputEquation.innerHTML = '';
  } else {
    inputEquation.innerHTML = inputValue;
  }

  input.value = result;
}
let clearInput = function () {
  input.value = '';
};
let deleteLastInput = function () {
  input.value = input.value.slice(0, -1);
};
let isLastCharacterAnOperator = function (value) {
  let lastcharacter = value.substr(-1);
  let operators = ['+', '-', '*', '/', '.'];
  let result = operators.includes(lastcharacter);
  return result;
};
let onCalculatorButtonClick = function (event) {
  let action = event.currentTarget.textContent;

  processCalculatorWithAction(action);
};
let setOperatorButtonsDisabled = function (disabled) {
  for (let i = 0; i < operatorButtons.length; i++) {
    let operatorButton = operatorButtons[i];

    operatorButton.disabled = disabled;
  }
};

let processCalculatorWithAction = function (action) {
  if (action === '=') {
    calculateResult();
  } else if (action === 'AC') {
    clearInput();
  } else if (action === 'DEL') {
    deleteLastInput();
  } else {
    let inputValue = input.value;
    let newValue = inputValue + action;

    input.value = newValue;
  }
  let isOperator = isLastCharacterAnOperator(input.value);

  if (isOperator) {
    setOperatorButtonsDisabled(true);
  } else {
    setOperatorButtonsDisabled(false);
  }
};

for (let i = 0; i < buttons.length; i++) {
  let currentButton = buttons[i];

  currentButton.addEventListener('click', onCalculatorButtonClick);
}
let onBodyKeyUp = function (event) {
  let key = event.key;
  let acceptedAction = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    '.',
    '+',
    '-',
    '/',
    '*',
    '(',
    ')',
    '=',
    'DEL',
    'AC',
  ];
  let action;

  if (key === 'Enter') {
    action = '=';
  } else if (key === 'Backspace') {
    action = 'DEL';
  } else if (key === 'Escape') {
    action = 'AC';
  } else {
    action = key;
  }

  if (acceptedAction.includes(action)) {
    processCalculatorWithAction(action);
  }
};
document.addEventListener('keyup', onBodyKeyUp);

let onInputHistoryButtonClicked = function (event) {
  if (inputHistory.classList.contains('open')) {
    inputHistory.classList.remove('open');
  } else {
    inputHistory.classList.add('open');
  }
};
inputHistoryButton.addEventListener('click', onInputHistoryButtonClicked);
