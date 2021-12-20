function Calculator() {
  const DIGITS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const SYMBOLS = ["+", "-", "*", "/"];
  let inputArray = [];

  function createElement(value) {
    const element = document.createElement("div");
    element.textContent = value;
    return element;
  }

  function renderDigits(arrayOfDidjits) {
    containerOfDigits = document.querySelector("#digits");
    arrayOfDidjits.forEach((el) => {
      const digit = createElement(el);
      digit.classList.add("digit");
      containerOfDigits.append(digit);
    });
  }

  function renderSymbols(arrayOfSymbols) {
    containerOfSymbols = document.querySelector("#symbols");
    arrayOfSymbols.forEach((el) => {
      const symbol = createElement(el);
      symbol.classList.add("symbol");
      containerOfSymbols.append(symbol);
    });
  }

  function renderCalculator() {
    renderDigits(DIGITS);
    renderSymbols(SYMBOLS);
  }
  renderCalculator();

  function addListner() {
    const display = document.querySelector("#display");
    const containerOfDigits = document.querySelector("#digits");
    const containerOfSymbols = document.querySelector("#symbols");
    const result = document.querySelector("#result");
    const cansel = document.querySelector("#btn");

    cansel.addEventListener("click", clickOnCancel);
    containerOfDigits.addEventListener("click", clickOnDigits);
    containerOfSymbols.addEventListener("click", clickOnSymbols);
    result.addEventListener("click", clickOnResult);
    

    function clickOnCancel() {
      clearValue(display);
      inputArray = [];
    }

    function clearValue(element) {
      element.textContent = "";
    }

    function clickOnDigits(e) {
      if (e.target && e.target.classList.contains("digit")) {
        const digit = e.target.textContent;
        fillInputString(digit);
      }
    }

    function clickOnSymbols(e) {
      if (e.target && e.target.classList.contains("symbol")) {
        const symbol = e.target.textContent;
    
        fillInputString(symbol);
      }
    }
    function findSymbol() {
      const indexOfSymbol = inputArray.findIndex(function (element) {
        if (SYMBOLS.includes(element)) {
          return true;
        } else {
          return false;
        }
      });
      return indexOfSymbol;
    }

    function fillInputString(symbol) {
        
        if(!inputArray.length && SYMBOLS.includes(symbol)){
            return;
        }       

      if (DIGITS.includes(+symbol)) {
        inputArray.push(symbol);
        displayString();
      }
      if (SYMBOLS.includes(symbol)) {
        const indexOfSymbol = findSymbol();

        if (indexOfSymbol && indexOfSymbol !== -1) {
            return;
        } else {
          inputArray.push(symbol);
          displayString();
        }
      }     
    }

    function displayString() {
      const string = inputArray.join("");
      display.textContent = string;      
    }

    function clickOnResult() {
        const indexOfSymbol= findSymbol()
        
        if(indexOfSymbol === inputArray.length-1 || indexOfSymbol === -1){
            return;
        }
      clearValue(display);
      display.textContent = getResult();
      inputArray = [];  
    }

    function getResult() {
      let result = 0;
      const indexOfSymbol = findSymbol();

      const symbol = inputArray[indexOfSymbol];
      const arrDigit1 = inputArray.slice(0, indexOfSymbol);
      const digit1 = +arrDigit1.join("");

      const arrDigit2 = inputArray.slice(indexOfSymbol + 1);
      const digit2 = +arrDigit2.join("");

      if (symbol === "/" && digit2 === 0) {
        alert("you cannot divide by zero");
        clearValue(display);
        inputArray = [];
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
  addListner();
}

const calc = new Calculator();
