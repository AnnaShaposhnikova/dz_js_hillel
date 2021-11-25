const INPUTS_ID = {
  name: "#name",
  password: "#password",
};
const ERROR_MSG = {
  empty: "Field is required",
  internetConnection: "Please, check your internet connection and try again",
};

const submit$ = $(".btn");
const row$ = $(".row");
const errorConnectionEl$ = $(".connection-err");

submit$.on("click", onSubmitClick);

function onSubmitClick(e) {
  e.preventDefault();
  console.log(e);
  const nameVal$ = getInputData(INPUTS_ID.name);
  const passwordVal$ = getInputData(INPUTS_ID.password);

  const errors = [];
  errors.push(validateEmptyData(nameVal$, INPUTS_ID.name));
  errors.push(validateEmptyData(passwordVal$, INPUTS_ID.password));
  const isError = errors.includes(false);
  if (!isError) {
    fetch("http://example.com/movies.json")
      .then((response) => {
        console.log("success");
        

        clearInputValue(INPUTS_ID.name);
        clearInputValue(INPUTS_ID.password);
        //   return response.json();
      })
      .catch((error) => {
        row$.hide();
        errorConnectionEl$.text(ERROR_MSG.internetConnection);
      });
  }
}

function getInputData(idOfElement) {
  const element = $(idOfElement);
  return element.val().trim();
}
function validateEmptyData(value, inputId) {
  if (!value) {
    const currentInput = $(inputId);

    const errorContainer = currentInput.next(".error-msg");
    errorContainer.text(ERROR_MSG.empty);
    return false;
  } else {
    const currentInput = $(inputId);
    const errorContainer = currentInput.next(".error-msg");
    errorContainer.empty();
    return true;
  }
}
function clearInputValue(inputId) {
  const element$ = $(inputId);
  element$.val("");
}
