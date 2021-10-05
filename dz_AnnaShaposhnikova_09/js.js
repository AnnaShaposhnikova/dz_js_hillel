const buttonEl = document.querySelector('#btn');

buttonEl.addEventListener('click', onClick);

function onClick(){

  const user = getInputData('#input-first-name', '#input-last-name','#input-phone');
  const arrOfErrors = [];

  validateName(user.firstName,'#msgFirstName', arrOfErrors);
 
  validateName(user.lastName,'#msgLastName', arrOfErrors);

  validatePhoneNumber(user.phone,'#msgPhone', arrOfErrors); 

  if(arrOfErrors.length){
    return;
  } 

  const newStringPhoneNum = formatPhoneNum(user.phone);

  addDataRow(user.firstName, user.lastName, newStringPhoneNum);

  clearForm();
  
} 

function addDataRow(firstName, lastName, phone){
  const tr = document.createElement('tr'); 
  createElement(firstName, tr, 'td');
  createElement(lastName, tr, 'td');
  createElement(phone, tr, 'td' );
  let containerEl = document.querySelector('tbody');  
  containerEl.append(tr);
}

function clearValue(element){
  if(element.localName === "input"){
    element.value = '';
  }else{
    element.textContent = '';
  }  
}

function clearForm(){
  const alertFirstName = document.querySelector('#msgFirstName');
  const alertLastName = document.querySelector('#msgLastName');
  const alertPhone = document.querySelector('#msgPhone'); 
  
  const textInputFirstNameEl = document.querySelector('#input-first-name');
  const textInputLastNameEl = document.querySelector('#input-last-name');
  const textInputPhoneEl = document.querySelector('#input-phone');
  
  clearValue(alertFirstName);  
  clearValue(alertLastName);  
  clearValue(alertPhone);  

  clearValue(textInputFirstNameEl);
  clearValue(textInputLastNameEl);
  clearValue(textInputPhoneEl);

}

function getValueAndTrim(element){
 return  trimmedValue = element.value.trim();  
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
function validateName(name,idOfTagForErrorMsg, arrError){
  if(!name){
    showAlert(idOfTagForErrorMsg,'Fild is requared'); 
    arrError.push('fild is requared');   
  } 
}

function validatePhoneNumber(phone,idOfTagForErrorMsg, arrError){
  if(!phone){
    showAlert(idOfTagForErrorMsg,'Fild is requared'); 
    arrError.push('empty phone'); 
  }else{
    const reg = /^(\d){11,14}$/;
    if(!phone.match(reg)){
      showAlert(idOfTagForErrorMsg,'The phone number must contain only digits. Number of digits 12'); 
      arrError.push('only didgits'); 
    } 
  }
}

function getInputData(idOfInputFirstName, idOfInputLastname, idOfInputPhone){
  const firstNameEl = document.querySelector(idOfInputFirstName);
  const lastNameEl = document.querySelector(idOfInputLastname);
  const phoneEl = document.querySelector(idOfInputPhone);

  const lastNameValue = getValueAndTrim(lastNameEl);
  const phoneValue = getValueAndTrim(phoneEl); 

  return {
    firstName: getValueAndTrim(firstNameEl),
    lastName: lastNameValue,
    phone: phoneValue
  };
}

 
