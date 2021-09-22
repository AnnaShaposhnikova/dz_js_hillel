
let calc = {
   
  arrayOfOperands: [],
  arrayOfSymbols: ["+", "-", "*", "/"],
  numberOfOperands: 0,
  arrayOfNumberOfOperands: [2, 3, 4, 5],
  symbol:'',
  result:'',
  amountOfAttemption: 3,

  askUserForInputData: function (titleMessage) {
    let res = prompt(titleMessage);
    if(res === null){
      
      return '';
    }
    return res.trim();
  },

  getNumberOfOperands: function () {
    let numberOfOperands;
    do {
      numberOfOperands = this.askUserForInputData(
        "Please, enter number of operands"
      );
            
    } while (!numberOfOperands || isNaN(+numberOfOperands) || !this.arrayOfNumberOfOperands.includes(+numberOfOperands));
    this.numberOfOperands = +numberOfOperands;
  },  

  getSymbol: function () {
    let symbol;
    do {
      symbol = this.askUserForInputData(`please, enter symbol + - * /`);
     
    } while (!symbol || !this.arrayOfSymbols.includes(symbol));
    this.symbol = symbol;
  },

  getOperands: function () {debugger
    let operand; 
    
    for (let i = 0; i < this.numberOfOperands; i++) {
      do {
        operand = this.askUserForInputData(`Please, enter ${i+1} operand`);
        if(this.symbol === '/' && +operand === 0){      
             alert('you can not divide by zero');
             operand = "";
        }            
      } while (!operand || isNaN(+operand));
      this.arrayOfOperands.push(+operand);
    }
  },

  getResult: function () {
    
    let result = this.arrayOfOperands[0];

    for (let i = 1; i < this.arrayOfOperands.length ; i++) {
      let op = +this.arrayOfOperands[i];

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
  
      let show = this.arrayOfOperands.join(this.symbol);
    alert(`${show} = ${this.result}`);
        
  },
};

calc.getSymbol();
calc.getNumberOfOperands();
calc.getOperands();
calc.getResult();
calc.showResult();
