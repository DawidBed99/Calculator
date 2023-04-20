let result = "";

function displayNumbers() {
  if (this.textContent === "." && currentNUMBER.innerHTML.includes(".")) {
    return;
  }
  if (this.textContent === "." && currentNUMBER.innerHTML === "") {
    return (currentNUMBER.innerHTML = "0.");
  }

  currentNUMBER.innerHTML += this.textContent;
}

function operation() {
  if (currentNUMBER.innerHTML === "" && this.textContent === "-") {
    return (currentNUMBER.innerHTML = "-");
  } else if (currentNUMBER.innerHTML === "") {
    return;
  }
  switch (mathSign.innerHTML) {
    case "=":
      displayResult();
      break;
    case "":
      previousNUMBER.innerHTML = currentNUMBER.innerHTML;
      mathSign.innerHTML = this.textContent;
      currentNUMBER.innerHTML = "";
      break;
    case "+":
      displayResult();
      previousNUMBER.innerHTML = currentNUMBER.innerHTML;
      mathSign.innerHTML = this.textContent;
      currentNUMBER.innerHTML = "";
      break;
    case "-":
      displayResult();
      previousNUMBER.innerHTML = currentNUMBER.innerHTML;
      mathSign.innerHTML = this.textContent;
      currentNUMBER.innerHTML = "";
      break;
    case "x":
      displayResult();
      previousNUMBER.innerHTML = currentNUMBER.innerHTML;
      mathSign.innerHTML = this.textContent;
      currentNUMBER.innerHTML = "";
      break;
    case "÷":
      displayResult();
      previousNUMBER.innerHTML = currentNUMBER.innerHTML;
      mathSign.innerHTML = this.textContent;
      currentNUMBER.innerHTML = "";
      break;
    case "^":
      displayResult();
      previousNUMBER.innerHTML = currentNUMBER.innerHTML;
      mathSign.innerHTML = this.textContent;
      currentNUMBER.innerHTML = "";
      break;
  }
}

function displayResult() {
  if (previousNUMBER.innerHTML === "" || currentNUMBER.innerHTML === "") {
    return;
  }

  let num1 = Number(currentNUMBER.innerHTML);
  let num2 = Number(previousNUMBER.innerHTML);

  switch (mathSign.innerHTML) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num2 - num1;
      break;
    case "x":
      result = num1 * num2;
      break;
    case "÷":
      result = num2 / num1;
      break;
    case "^":
      result = num2 ** num1;
      break;
  }
  addHistory();
  currentNUMBER.innerHTML = result;
  previousNUMBER.innerHTML = "";
  mathSign.innerHTML = "";
}

function cls() {
  result = "";
  currentNUMBER.innerHTML = "";
  previousNUMBER.innerHTML = "";
  mathSign.innerHTML = "";
}

function addHistory() {
  const newHistoryItem = document.createElement("li");
  newHistoryItem.innerHTML = `${previousNUMBER.innerHTML} ${mathSign.innerHTML} ${currentNUMBER.innerHTML} = ${result}`;
  newHistoryItem.classList.add("history-item");
  calculatorHistory.appendChild(newHistoryItem);
}

function clearHistory() {
  calculatorHistory.textContent = "";
}

const currentNUMBER = document.querySelector(".current_number");
const previousNUMBER = document.querySelector(".previous_number");
const mathSign = document.querySelector(".math_sign");
const numberBUTTONS = document.querySelectorAll(".number");
const operatorsBUTTONS = document.querySelectorAll(".operator");
const equalsBUTTON = document.querySelector(".equals");
const clearBUTTON = document.querySelector(".clear");
const calculatorHistory = document.querySelector(".history-list");
const historyButton = document.querySelector(".clear_history");

operatorsBUTTONS.forEach((button) => {
  button.addEventListener("click", operation);
});

equalsBUTTON.addEventListener("click", displayResult);

clearBUTTON.addEventListener("click", cls);

numberBUTTONS.forEach((button) => {
  button.addEventListener("click", displayNumbers);
});

historyButton.addEventListener("click", clearHistory);
