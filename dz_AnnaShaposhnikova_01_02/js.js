
let firstName = prompt('What is your first name?');
if(!firstName){
    do{     
        alert('Please, enter your first name');         
        firstName = prompt('What is your first name?');    
    
    }while(!firstName); 
}


let lastName = prompt('What is your  last name?');
if(!lastName){
    do{     
        alert('Please, enter your last name');         
        lastName = prompt('What is your last name?');    
    
    }while(!lastName);
}



if(firstName && lastName){
    alert(`Hello, ${firstName} ${lastName}!`);
    
}
const isAdult = confirm('Are you adult ?');
if (isAdult){
    alert(`${firstName} ${lastName}, take your cigarettes`);
} else {     
    alert(`${firstName} ${lastName}, you can't buy vodka`);           
    
} 
       
