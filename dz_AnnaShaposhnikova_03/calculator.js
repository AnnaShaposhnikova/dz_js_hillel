
let calc = {
   
  arrayOfNumbers: [],
  arrayOfSymbols: ["+", "-", "*", "/"],
  numberOfSymbols: 0,
  symbol:'',
  result:'',

  askUserForInputData: function (titleMessage) {
    return prompt(titleMessage);
  },

  getNumberOfSymbols: function () {
    let numberOfSymbols;
    do {
      numberOfSymbols = this.askUserForInputData(
        "Please, enter number of symbols"
      );
    } while (!numberOfSymbols || isNaN(+numberOfSymbols) || numberOfSymbols <= 0);
    this.numberOfSymbols = numberOfSymbols;
  },  

  getSymbol: function () {
    let symbol;
    do {
      symbol = this.askUserForInputData(`please, enter symbol`);
    } while (!symbol || !this.arrayOfSymbols.includes(symbol));
    this.symbol = symbol;
  },

  getOperands: function () {
    let operand; 
    
    for (let i = 1; i <= +this.numberOfSymbols + 1; i++) {
      do {
        operand = this.askUserForInputData(`Please, enter ${i} operand`);
      } while (!operand || isNaN(+operand));
      this.arrayOfNumbers.push(operand);
    }

  },

  checkDivision: function (symbol) {                                ///TODO
      if(symbol === '/'){
        for (let i = 1; i < this.arrayOfNumbers.length; i++) {
           if(this.arrayOfNumbers[i] === '0'){
               alert('you can not divide by zero')
               break;                                            
           }
        }
    }
  },

  getResult: function () {
    
    let result = +this.arrayOfNumbers[0];

    for (let i = 1; i < this.arrayOfNumbers.length ; i++) {
      let op = +this.arrayOfNumbers[i];

      switch (this.symbol) {
        case "+":
            result +=  op;
            break;
        case "-":
            result -=  op;
            break;
        case '*':
            result *= op;
            break;
        case '/':
            result /= op;
            break;  
      }
    }

    this.result = result;
  },
  showResult: function () {
    
    let show = this.arrayOfNumbers.join(this.symbol);
    alert(`${show} = ${this.result}`);
  },
};

calc.getSymbol();
calc.getNumberOfSymbols();
calc.getOperands();
calc.checkDivision(this.symbol);
calc.getResult();
calc.showResult();

