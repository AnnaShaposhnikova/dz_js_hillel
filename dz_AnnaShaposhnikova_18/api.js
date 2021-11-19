const userContainer$ = $("#usersContainer");
const btnCreateUser$ = $(".button");
const btnSaveUser$ = $(".save-button");
const createUserContainer$ = $(".create-user-container");
const updateHeader$ = $("#update");
const createHeader$ = $("#create");
const enternetErrorContainer$ = $(".enternet-error");
const ERROR_MSG = {
  empty: "Field is required",
  enternetConnection:
    "TYDYSHCH!!!!Please, check your internet connection and try again",
};

const ID_NAME = "#name";
const ID_USERNAME = "#username";
const ID_EMAIL = "#email";
const ID_STREET = "#street";
const ID_CITY = "#city";

const httpService = new HTTPService();

getUsers().then((users) => renderUsers(users));

function renderUsers(users) {
  users.forEach((user) => {
    renderOneUser(user);
  });
}

function getUsers() {
  return httpService
    .get(ENVORINMENT.Users.getUsers)
    .then((r) => Promise.resolve(r.data))
    .catch((e) => {
      showEnternetError();
    });
}

btnCreateUser$.on("click", onBtnClick);
btnSaveUser$.on("click", onBtnSaveClick);
userContainer$.on("click", ".btn-update", onBtnUpdateClick);
userContainer$.on("click", ".btn-delete", onBtnDeleteClick);

function onBtnClick(e) {
  updateHeader$.hide();
  createHeader$.show();
  createUserContainer$.show();
}
function onBtnSaveClick(e) {
  const newUser = getFormData();
  if (!newUser) {
    return;
  }
  if (!createUserContainer$.attr("data-id")) {
    saveNewUser(newUser).then((user) => {
      renderOneUser(user);
    });
  } else {
    userId = createUserContainer$.attr("data-id");
    newUser.id = userId;
    updateUser(newUser);
  }

  clearInputValue();
  createUserContainer$.hide();
}

function onBtnUpdateClick(e) {
  createUserContainer$.show();
  createHeader$.hide();
  const userId = getUserID(e);
  createUserContainer$.attr("data-id", userId);

  getUser(userId).then((user) => {
    setInputData(ID_NAME, user.name);
    setInputData(ID_USERNAME, user.username);
    setInputData(ID_EMAIL, user.email);
    setInputData(ID_STREET, user.address.street);
    setInputData(ID_CITY, user.address.city);
  });
  clearInputValue();
}

function onBtnDeleteClick(e) {
  const userId = getUserID(e);
  deleteUser(userId);
}

function renderOneUser(user) {
  const row$ = createElement("div", "", "row");
  row$.attr("data-id", user.id);
  const rowWithData = renderUserToRow(user, row$);
  userContainer$.append(rowWithData);
}

function renderUserToRow(user, row$) {
  const id$ = createElement("div", user.id, "user-header id");
  const name$ = createElement("div", user.name, "user-header name");
  const username$ = createElement("div", user.username, "user-header username");
  const email$ = createElement("div", user.email, "user-header email");
  const street$ = createElement(
    "div",
    user.address.street,
    "user-header street"
  );
  const city$ = createElement("div", user.address.city, "user-header city");
  const btnUpdate = createElement("button", "Update", "btn-update");
  const btnDelete = createElement("button", "Delete", "btn-delete");

  row$.append(id$);
  row$.append(name$);
  row$.append(username$);
  row$.append(email$);
  row$.append(street$);
  row$.append(city$);
  row$.append(btnUpdate);
  row$.append(btnDelete);
  console.log(row$);
  return row$;
}

function createElement(tag, data = "", className = "") {
  return $(`<${tag} class='${className}'>${data}</${tag}>`);
}

function getInputData(idOfElement) {
  const element = $(idOfElement);
  return element.val().trim();
}
function setInputData(idOfElement, value) {
  const element = $(idOfElement);
  element.val(value);
}

function validateData(value, id) {
  if (!value) {
    const currentInput = $(id);
    const errorContainer = currentInput.next(".error-msg");
    errorContainer.text(ERROR_MSG.empty);
    return false;
  } else {
    const currentInput = $(id);
    const errorContainer = currentInput.next(".error-msg");
    errorContainer.empty();
    return true;
  }
}

function saveNewUser(user) {
  return httpService
    .post(ENVORINMENT.Users.createUser, user)
    .then((r) => Promise.resolve(r.data))
    .catch((e) => {
      showEnternetError();
    });
}

function clearInputValue() {
  const name$ = $(ID_NAME);
  const username$ = $(ID_USERNAME);
  const email$ = $(ID_EMAIL);
  const street$ = $(ID_STREET);
  const city$ = $(ID_CITY);
  name$.val("");
  username$.val("");
  email$.val("");
  street$.val("");
  city$.val("");
}

function updateUser(user) {
  const id = user.id;
  return httpService
    .put(ENVORINMENT.Users.putUser, user)
    .then((r) => Promise.resolve(r.data))
    .then((user) => {
      const userRow = userContainer$.find(`.row[data-id="${user.id}"]`);
      userRow.empty();
      const newRow = renderUserToRow(user, userRow);
    })
    .catch((e) => {
      showEnternetError();
    });
}

function getUser(id) {
  return httpService
    .get(ENVORINMENT.Users.getUsers, id)
    .then((r) => Promise.resolve(r.data))
    .catch((e) => {
      showEnternetError();
    });
}

function deleteUser(id) {
  return httpService
    .delete(ENVORINMENT.Users.deleteUser, id)
    .then((r) => Promise.resolve(r.data))
    .then((user) => {
      setTimeout(() => {
        removeElement(id);
      }, 500);
    })
    .catch((e) => {
      showEnternetError();
    });
}

function showEnternetError() {
  let div$ = $(`<div>${ERROR_MSG.enternetConnection}</div>`);
  enternetErrorContainer$.append(div$);
}

function getUserID(e) {
  const targetElement$ = $(e.target);
  return targetElement$.parent().attr("data-id");
}

function removeElement(id) {
  userContainer$.find(`.row[data-id="${id}"]`).remove();
}

function getFormData() {
  const nameVal = getInputData(ID_NAME);
  const usernameVal = getInputData(ID_USERNAME);
  const emailVal = getInputData(ID_EMAIL);
  const streetVal = getInputData(ID_STREET);
  const cityVal = getInputData(ID_CITY);
  const errors = [];
  errors.push(validateData(nameVal, ID_NAME));
  errors.push(validateData(usernameVal, ID_USERNAME));
  errors.push(validateData(emailVal, ID_EMAIL));
  errors.push(validateData(streetVal, ID_STREET));
  errors.push(validateData(cityVal, ID_CITY));
  const isError = errors.includes(false);

  if (isError) {
    return false;
  }

  return {
    name: nameVal,
    username: usernameVal,
    email: emailVal,
    address: {
      street: streetVal,
      city: cityVal,
    },
  };
}