const buttonEl = document.querySelector('#btn');
const textInputEl = document.querySelector('#input-text');
const listEl = document.querySelector('#list');
 



buttonEl.addEventListener('click', onClick);


function onClick(){
  if(!listEl.hasChildNodes()){
    let ul = document.createElement('ul');
    listEl.append(ul);
    ul.classList.add('ul-container');
  } 
  let ul = document.querySelector('.ul-container');
  const liElement = document.createElement('li');
  const textInput = textInputEl.value;
  const trimTextInput = textInput.trim();
  if(!trimTextInput){
    return;
  }  
  liElement.textContent = trimTextInput; 
  ul.append(liElement);
  textInputEl.value ='';
}
 