
function getNumber(message){
    return prompt(message)
}

function getSymbol(){    
    do{
        symbol = prompt('Please, enter symbol + , - , * , /');        
    }while(!symbol || !(symbol === '+' || symbol === '-' ||  symbol === '*' || symbol === '/')); 
    return symbol;
}

function calc(){
    // debugger
    let firstNumber;
    let secondNumber;  
      
    do{
        firstNumber = getNumber('Enter first number');           
    }while (!firstNumber || isNaN(firstNumber));      

    firstNumber = +firstNumber;

    let symbol = getSymbol(); 

    do{
        secondNumber = getNumber('Enter second number');           
    }while(!secondNumber || isNaN(secondNumber)); 
    
    secondNumber = +secondNumber;
    
    if(secondNumber === 0 && symbol === '/'){
        alert ('You cannot divide by zero');
        calc();
    }
    
    let result;
    switch(symbol){
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber  - secondNumber;
            break;
        case '*':
            result = firstNumber  * secondNumber;
            break;
        case '/':             
            result = firstNumber  / secondNumber;
            break;
    }
    alert (`${firstNumber} ${symbol} ${secondNumber} = ${result}`);
}
calc();

