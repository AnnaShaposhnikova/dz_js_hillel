function Calculator() {
  const DIGITS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const SYMBOLS = ["+", "-", "*", "/"];
  this.inputArray = [];

  function createElement(value) {
    const element = document.createElement("div");
    element.textContent = value;
    return element;
  }

  function renderDigits(arrayOfDidjits) {
    const containerOfDigits = document.querySelector("#digits");
    arrayOfDidjits.forEach((el) => {
      const digit = createElement(el);
      digit.classList.add("digit","border");
      containerOfDigits.append(digit);
    });
  }

  function renderSymbols(arrayOfSymbols) {
    containerOfSymbols = document.querySelector("#symbols");
    arrayOfSymbols.forEach((el) => {
      const symbol = createElement(el);
      symbol.classList.add("symbol", "border");
      containerOfSymbols.prepend(symbol);
    });
  }

  this.renderCalculator = function () {
    renderDigits(DIGITS);
    renderSymbols(SYMBOLS);
    this.addListner();
  };

  this.addListner = function() {
    const display = document.querySelector("#display");
    const containerOfDigits = document.querySelector("#digits");
    const containerOfSymbols = document.querySelector("#symbols");
    const result = document.querySelector("#result");
    const cansel = document.querySelector("#btn");

    cansel.addEventListener("click", this.clickOnCancel.bind(this));
    containerOfDigits.addEventListener("click", this.clickOnDigits.bind(this));
    containerOfSymbols.addEventListener("click", this.clickOnSymbols.bind(this));
    result.addEventListener("click", this.clickOnResult.bind(this));
  }
  this.clickOnCancel = function () {
    clearValue(display);
    this.inputArray = [];
  }

  function clearValue(element) {
    element.textContent = "";
  }

  this.clickOnDigits = function(e) {
    if (e.target &&e.target .classList.contains("digit")) {
      const digit = e.target.textContent;
      this.fillInputString(digit);
    }
  }

  this.clickOnSymbols = function(e) {
    if (e.target && e.target.classList.contains("symbol")) {
      const symbol = e.target.textContent;

      this.fillInputString(symbol);
    }
  }
  this.findSymbol = function() {
    const indexOfSymbol = this.inputArray.findIndex(function (element) {
      if (SYMBOLS.includes(element)) {
        return true;
      } else {
        return false;
      }
    });
    return indexOfSymbol;
  }

  this.fillInputString = function(symbol) {
    if (!this.inputArray.length && SYMBOLS.includes(symbol)) {
      return;
    }

    if (DIGITS.includes(+symbol)) {
      this.inputArray.push(symbol);
      this.displayString();
    }
    if (SYMBOLS.includes(symbol)) {
      const indexOfSymbol = this.findSymbol();

      if (indexOfSymbol && indexOfSymbol !== -1) {
        return;
      } else {
        this.inputArray.push(symbol);
        this.displayString();
      }
    }
  }

  this.displayString = function() {
    const string = this.inputArray.join("");
    display.textContent = string;
  }

  this.clickOnResult = function() {
    const indexOfSymbol = this.findSymbol();

    if (indexOfSymbol === this.inputArray.length - 1 || indexOfSymbol === -1) {
      return;
    }
    clearValue(display);
    display.textContent = this.getResult();
    this.inputArray = [];
  }

  this.getResult = function() {
    let result = 0;
    const indexOfSymbol = this.findSymbol();

    const symbol = this.inputArray[indexOfSymbol];
    const arrDigit1 = this.inputArray.slice(0, indexOfSymbol);
    const digit1 = +arrDigit1.join("");

    const arrDigit2 = this.inputArray.slice(indexOfSymbol + 1);
    const digit2 = +arrDigit2.join("");

    if (symbol === "/" && digit2 === 0) {
      alert("you cannot divide by zero");
      clearValue(display);
      this.inputArray = [];
      return;
    }

    switch (symbol) {
      case "+":
        result = digit1 + digit2;
        break;
      case "-":
        result = digit1 - digit2;
        break;
      case "*":
        result = digit1 * digit2;
        break;
      case "/":
        result = digit1 / digit2;
        break;
    }
    return result;
  }
}

const calc = new Calculator();
calc.renderCalculator();
