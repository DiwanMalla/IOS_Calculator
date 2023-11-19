// Selecting DOM elements
const numbers = document.querySelectorAll(".numbers");
const result = document.querySelector(".result span");
const clear = document.querySelector(".clear");
const negative = document.querySelector(".negative");
const signs = document.querySelectorAll(".sign");
const percent = document.querySelector(".percent");
const equals = document.querySelector(".equals");

// Initializing variables for calculations
let firstValue = "";
let isFirstValue = false;
let secondValue = "";
let isSecondValue = true;
let sign = "";
let resultValue = 0;
let reserveValue = 0;

// Adding click event listeners to number buttons
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    let atr = number.textContent;
    console.log(atr);

    // Checking if it's the first value being entered
    if (isFirstValue == false) {
      getFirstValue(atr);
    }

    // Checking if it's the second value being entered
    if (isSecondValue == false) {
      getSecondValue(atr);
    }
  });
});

// Function to get the first value entered
function getFirstValue(anotherNumber) {
  result.innerHTML = "";
  firstValue += anotherNumber;
  result.innerHTML = firstValue;
  firstValue = +firstValue; // Converting to a number
  result.innerHTML = firstValue;
}

// Function to get the second value entered
function getSecondValue(secondNumber) {
  result.innerHTML = "";
  secondValue += secondNumber;
  result.innerHTML = secondValue;
  secondValue = +secondValue; // Converting to a number
}

// Function to handle sign buttons
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

// Clear button click event
clear.addEventListener("click", () => {
  firstValue = "";
  isFirstValue = false;
  secondValue = "";
  isSecondValue = true;
  sign = "";
  resultValue = 0;
  reserveValue = 0;
  result.innerHTML = "0";
});

// Equals button click event
equals.addEventListener("click", () => {
  if (secondValue == "") {
    secondValue = reserveValue;
  }
  // Performing calculations based on the selected operator
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

  // Checking and formatting the result value if needed
  checkResult();
});

// Function to check and format the result value
function checkResult() {
  resultValueString = JSON.stringify(resultValue);
  console.log(resultValueString);
  if ((resultValueString >= 5) & !Number.isInteger(resultValue)) {
    resultValue = JSON.parse(resultValueString);
    result.innerHTML = resultValue.toFixed(3);
  }
}

// Percentage button click event
percent.addEventListener("click", () => {
  result.innerHTML = "";
  if (firstValue != "") {
    resultValue = firstValue / 100;
    firstValue = resultValue;
  }
  result.innerHTML = resultValue;
});

// Negative button click event
negative.addEventListener("click", () => {
  if (firstValue != "") {
    result.innerHTML = "";
    resultValue = -firstValue;
    firstValue = resultValue;
  }
  result.innerHTML = resultValue;
});
