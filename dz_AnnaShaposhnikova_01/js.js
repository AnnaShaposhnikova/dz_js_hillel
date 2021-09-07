let firstName = prompt('What is your name?');
let lastName = prompt('What is your last name?');
let age = prompt('How old are you?');


if (!firstName){
    alert('Please, enter your first name');      
}

if (!lastName){
    alert('Please, enter your last name');   
}

if (!age){
    alert('Please, enter your age');     
}

alert(`Hello, ${firstName} ${lastName}!`);

if (isNaN(Number(age))) {
    alert('Please, enter your age as a number')
} else {   
    if(age < 18){
        alert(`${firstName} ${lastName}, your age is ${age}, you can't buy vodka`);
    }else{
        alert(`${firstName} ${lastName}, your age is ${age}, take your cigarettes`);      
    }
} 
       
