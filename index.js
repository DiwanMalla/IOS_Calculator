const numbers = document.querySelectorAll(`.numbers`);
const result = document.querySelector(`.result span`);
const clear = document.querySelector(`.clear`);
const negative = document.querySelector(`.negative`);
const signs = document.querySelectorAll(`.sign`);
const percent = document.querySelector(`.percent`);
const equals = document.querySelector(`.equals`);
let firstValue = "";
let isFirstValue = false;
let secondValue = "";
let isSecondValue = true;
let sign = "";
let resultValue = 0;
let reserveValue = 0;

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    let atr = number.textContent;
    console.log(atr);
    if (isFirstValue == false) {
      getFirstValue(atr);
    }

    if (isSecondValue == false) {
      getSecondValue(atr);
    }
  });
});
function getFirstValue(anotherNumber) {
  result.innerHTML = "";
  firstValue += anotherNumber;
  result.innerHTML = firstValue;
  firstValue = +firstValue;
  result.innerHTML = firstValue;
}

function getSecondValue(secondNumber) {
  result.innerHTML = "";

  secondValue += secondNumber;
  result.innerHTML = secondValue;
  secondValue = +secondValue;
}
getSign();
function getSign() {
  signs.forEach((signClick) => {
    signClick.addEventListener("click", () => {
      sign = signClick.textContent;
      isFirstValue = true;
      isSecondValue = false;
      console.log(sign);
    });
  });
}
clear.addEventListener("click", () => {
  firstValue = "";
  result.innerHTML = "0";
});

equals.addEventListener("click", () => {
  if (secondValue == "") {
    secondValue = reserveValue;
  }
  console.log(firstValue);
  console.log(secondValue);
  result.innerHTML = "";
  switch (sign) {
    case "+": {
      resultValue = firstValue + secondValue;
      break;
    }
    case "-": {
      resultValue = firstValue - secondValue;
      break;
    }
    case "X": {
      resultValue = firstValue * secondValue;
      break;
    }
    case "/": {
      resultValue = firstValue / secondValue;
      break;
    }
    default: {
      resultValue = firstValue;
    }
  }
  result.innerHTML = resultValue;
  firstValue = resultValue;
  reserveValue = secondValue;
  secondValue = "";
  console.log(resultValue);

  checkResult();
});

function checkResult() {
  resultValueString = JSON.stringify(resultValue);
  console.log(resultValueString);
  if ((resultValueString >= 5) & !Number.isInteger(resultValue)) {
    resultValue = JSON.parse(resultValueString);
    result.innerHTML = resultValue.toFixed(3);
  }
}
percent.addEventListener("click", () => {
  result.innerHTML = "";
  if (firstValue != "") {
    resultValue = firstValue / 100;
    firstValue = resultValue;
  }
  result.innerHTML = resultValue;
});

negative.addEventListener("click", () => {
  if (firstValue != "") {
    result.innerHTML = "";
    resultValue = -firstValue;
    firstValue = resultValue;
  }
  result.innerHTML = resultValue;
});
