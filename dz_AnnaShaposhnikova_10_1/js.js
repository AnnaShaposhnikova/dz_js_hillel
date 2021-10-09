// У нас есть инпут и конпка
// Вводим текст в инпут, нажимаем на кнопку - появляется новая задачка в контейнере
// Задача в контейнере имеет текст введенный в инпуте, имеет крестик в вархнем правом углу, 
// так же появляется с желтым фоном, что означает - задача не выполнена
// Нажимаем на задачу один раз, бекграунд меняется на зеленый - задача выполнена, 
// нажимаем второй раз - меняет цвет ообратно на желтый.
// Нажимаем на крест - задача удаляется из контейнера.


// Обязательно используем делегирование, и по возможности разбиваем все на функции

const ERROR_MSG = {
  empty: 'Do not enter empty task',
};

const VALIDATION_FUNC = {
  [INPUT_ID.innput]: validateInput,
}
;
const VALIDATION_ID = {
  input:'inp'
};

const VALIDATIONS_IDS = {
  name: "name-validation",
  
};

const btnEl = document.querySelector('#btn');
const inpEl = document.querySelector('#inp')
const containerEl = document.querySelector('#todo-list-table');

btnEl.addEventListener('click', onClick);

containerEl.addEventListener('click',onCompleteTask);
containerEl.addEventListener('click',deleteItem);

function onClick(){
  const data = getInputData('#inp');
  if(!validateData(data)){
    return;
  };  
  
  createElement(data, containerEl,'div');
  clearValue(inpEl);
}

function getInputData(idOfElement){
  const element = document.querySelector(idOfElement);
  return element.value.trim();
}

function validateData(value) { 
  if (!value) {    
    const errorMsg = document.querySelector('.error-msg');
    errorMsg.textContent = 'Do not input empty task'; 
    return false;    
  }else{
    const errorMsg = document.querySelector('.error-msg');
    clearValue(errorMsg);
    return true;
  }
}




function createElement(title, container,tag){

    const element = document.createElement(tag);    
    element.textContent = title;    
    element.classList.add('item','yellow','font20');    
    const x = document.createElement('div');
    x.classList.add('delete','font20');
    x.textContent = "×";        
    element.append(x);
    container.append(element);
}

function clearValue(element){
  if(element.localName === "input"){
    element.value = '';
  }else{
    element.textContent = '';
  }  
}

function onCompleteTask(e){
  if(e.target.classList.contains('item')){
    e.target.classList.toggle('green');
  }
}

function deleteItem(e){
  if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();
  }
}

  
