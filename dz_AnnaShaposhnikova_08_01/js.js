const buttonEl = document.querySelector('#btn');
const textInputEl = document.querySelector('#input-text');
const listEl = document.querySelector('#list');
 
buttonEl.addEventListener('click', onClick);

function onClick(){
   
  const ul = document.querySelector('.ul-container');
  const liElement = document.createElement('li');
  const textInputValue = textInputEl.value.trim();
  
  if(!textInputValue){
    return
  }
  liElement.textContent = textInputValue;
  liElement.classList.add('font');
  const div = document.createElement('div');
  ul.append(div);
  div.append(liElement);
  
  const btnRemoveEl = document.createElement('button');
  const btnEditEl = document.createElement('button');
  btnEditEl.classList.add('inline-block','edit');
  btnRemoveEl.classList.add('inline-block','remove');
  btnEditEl.addEventListener('click', edit);
  btnRemoveEl.addEventListener('click', remove);
  btnEditEl.textContent ='Edit';
  btnRemoveEl.textContent = 'Remove';
  div.append(btnEditEl);
  div.append(btnRemoveEl);
  textInputEl.value ='';

    function remove(){

      div.remove();
    }
   

    function edit(){ 
    
        if(!div.querySelector('input')){
          const editInputEl = document.createElement('input');    
          editInputEl.type = 'text';
          editInputEl.classList.add('inline-block');
           
          editInputEl.setAttribute('placeholder','enter text')
          div.append(editInputEl);       
      }  else{
          const editInputEl = div.querySelector('input');
          const editInputValue = editInputEl.value.trim();
          if(!editInputValue){
            return;
          }
          liElement.textContent = editInputValue; 
          editInputEl.remove();
        
      } 
        


  
    }




      // const btnEditAdd = document.createElement('button');
      // btnEditAdd.classList.add('inline-block','edit');
      // div.append(btnEditAdd)
      // btnEditAdd.textContent = 'Add eddited';
      // btnEditAdd.addEventListener('click',addEdit);
   
     
    

}



 