const buttonEl = document.querySelector('#btn');
const textInputFirstNameEl = document.querySelector('#input-first-name');
const textInputLastNameEl = document.querySelector('#input-last-name');
const textInputPhoneEl = document.querySelector('#input-phone');

buttonEl.addEventListener('click', onClick);

function onClick(){

  let containerEl = document.querySelector('tbody');
 
  const firstNameValue = getValue(textInputFirstNameEl).trim();
  const lastNameValue = getValue(textInputLastNameEl).trim();
  const phoneValue = getValue(textInputPhoneEl).trim(); 
  const arrOfErrors = [];

  if(!firstNameValue){
    showAlert('#msgFirstName','Please, enter your first name'); 
    arrOfErrors.push('empty first name');   
  } 

  if(!lastNameValue){
    showAlert('#msgLastName','Please, enter your last name');
    arrOfErrors.push('empty first name');   
  }  

  if(!phoneValue){
    showAlert('#msgPhone','Please, enter your phone number'); 
    arrOfErrors.push('empty phone'); 
  }else{
    const reg = /^(\d){11,14}$/;
    if(!phoneValue.match(reg)){
      showAlert('#msgPhone','The phone number must contain only digits. Number of digits 12'); 
      arrOfErrors.push('only didgits'); 
    } 
  }
 
  const alertFirstName = document.querySelector('#msgFirstName');
  const alertLastName = document.querySelector('#msgLastName');
  const alertPhone = document.querySelector('#msgPhone');  

  if(arrOfErrors.length){
    return;
  }

  const newStringPhoneNum = formatPhoneNum(phoneValue);

  const tr = document.createElement('tr');

  const tdFirstName = createElement(firstNameValue, tr, 'td');
  const tdLastName = createElement(lastNameValue, tr, 'td');
  const tdPhone = createElement(newStringPhoneNum, tr, 'td' );

  if(alertFirstName.textContent){
    clearValue(alertFirstName);
  }

  if(alertFirstName.textContent){
    clearValue(alertLastName);
  }

  if(alertPhone.textContent){
    clearValue(alertPhone);
  }   
  
  containerEl.append(tr);
  
  clearValue(textInputFirstNameEl);
  clearValue(textInputLastNameEl);
  clearValue(textInputPhoneEl);


}

  


function clearValue(element){
  if(element.localName === "input"){
    element.value = '';
  }else{
    element.textContent = '';
  }  
}

function getValue(element){
  return element.value;
}

function createElement(title, container, tag){  
  const element = document.createElement(tag);
  element.textContent = title;
  container.append(element);
}  

function formatPhoneNum(sringPhoneNum){
  const arrNum = sringPhoneNum.split('');
  const newArr =[];
  newArr.push('+');

    for (let i = 0; i < arrNum.length; i++){
        newArr.push(arrNum[i]);
          if(i === 1){
          newArr.push('(');
        }
        if(i === 4){
          newArr.push(')');
        }


        if(i === 6 || i === 8){
          newArr.push('-');
        }         
          
      }
      newStringPhoneNum = newArr.join('');
      return newStringPhoneNum;
}

function showAlert(selector,message){
  const alertmsg = document.querySelector(selector);
  alertmsg.textContent = message;
}

 