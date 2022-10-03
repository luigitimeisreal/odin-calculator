function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(operator, num1, num2) {
  if (operator === '+') return add(num1, num2);
  if (operator === '-') return subtract(num1, num2);
  if (operator === '*') return multiply(num1, num2);
  if (operator === '/') return divide(num1, num2);
  return 0;
}

function evaluate(expression) {
  let isProductOrDivision = false;
  let isSumOrSubtract = false;
  for (let i = 1; i < expression.length - 1; i++) {
    if (expression[i] === '*' || expression[i] === '*') {
      let firstIndex = i;
      let lastIndex = i;
      while (expression[firstIndex] !== '*' && expression[firstIndex] !== '/' && expression[firstIndex] !== '+' && expression[firstIndex] !== '-' ) {
        firstIndex--;
      }
      while (expression[lastIndex] !== '*' && expression[lastIndex] !== '/' && expression[lastIndex] !== '+' && expression[lastIndex] !== '-' ) {
        lastIndex++;
      }
      console.log(expression[i])
    }
  }
}

let expression = "";

const btns = document.querySelector('.buttons');
const display = document.querySelector('.display');

for (let btnChild of btns.children) {
  btnChild.addEventListener('click', () => {
    if (btnChild.id === 'del') {
      expression = expression.slice(0, -1);
    } else if (btnChild.id === 'calc'){
      console.log(evaluate(expression));
    } else {
      expression += btnChild.id;
    }
    display.textContent = expression;
  })
}

