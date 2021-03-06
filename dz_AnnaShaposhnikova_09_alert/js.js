
    //Есть блок кода, в котором три инпута и кнопка. В инпуты по очереди вводим - имя, фамилию, номер телефона.
    //Под блоком с инпутами, есть блок таблицы с столбцами - имя, фамилия, телефон
    //Клик на кнопку создает новый контакт и он должен отобразиться в таблице
   // Контактов может быть БОЛЬШЕ чет один, то есть если мы после первого Иван Иванов 067223344 , ввели Петя Петров 0503344556 то Пётр тоже должен появиться в таблце контактов.
   // Все поля обязательные для заполнения
    //После нажатия на кнопку - поля очищаются 
   // Проверки желательны но не обязательны (номер телефона обычно проверяется регекспом)



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

  if(!firstNameValue){
    alert('Please, enter your first name');
    return;
  }  

  if(!lastNameValue){
    alert('Please, enter your last name');
    return;
  }

  if(!phoneValue){
    alert('Please, enter your phone number');
    return;
  }

  const reg = /^(\d){11,14}$/;
  if(!phoneValue.match(reg)){
    alert('The phone number must contain only digits.Number of digits 12');
    return;
  } 
  
    const newStringPhoneNum = formatPhoneNum(phoneValue);

  const tr = document.createElement('tr');

  const tdFirstName = createElement(firstNameValue, tr, 'td');
  const tdLastName = createElement(lastNameValue, tr, 'td');
  const tdPhone = createElement(newStringPhoneNum, tr, 'td' );  
   
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

 
