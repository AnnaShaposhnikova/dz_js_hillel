const INPUTS_ID = {
    name: 'name',
    lastName: 'lastName',
    phone: 'phone',
},

const ERROR_MSG = {
    nameEmpty: 'Name can not be empty',
    nameLength:'Name should be more than 3 symbols',
    lastNameEmpty: 'Last name can not be empty',
    lastNameLength:'Last name should be more than 3 symbols',
    phoneEmpty: 'Phone can not be empty',
    phoneDidjitAmount:'phone number must be at least 12 didjits length',
}

const VALIDATIONS_FUNC = {
    [INPUTS_ID.name]: validateName,
    [INPUTS_ID.lastName]: validateLastname,
    [INPUTS_ID/phone]: validatePhone,    
}

const VALIDATIONS_ID = {
    name: 'name-validation',
    lastName: 'lastName-validation',
    phone: 'phone-validation',
}

const btnEl = document.querySelector('#btn');
const userInputsEl = document.querySelector('.user-inputs');
const contactsContainerEl = document.querySelector('.table-container');

btnEl.addEventListener('click', onContactCreate);


function onContactCreate(){
  validateData(userInputsEl);
  createContact();
  createElement();
  renderNewContact();
  clearData();
}

function validateData(elemensArray){
    elemensArray.forEach(element => { 
        VALIDATIONS_FUNC[element.id](element.value);
        
    });

}


function validateName(val){}
function validateLastname(val){

}
function validatePhone(val){}
