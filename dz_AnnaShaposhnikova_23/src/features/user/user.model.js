
import userController from "./user.controller"

const users = [
  {
    id: 1,
    name: "Bob",
  },

  {
    id: 2,
    name: "Djoe",
  },

  {
    id: 3,
    name: "Iren",
  },

  {
    id: 4,
    name: "Tom",
  },

  {
    id: 5,
    name: "Helen",
  },

  {
    id: 6,
    name: "Nike",
  },

  {
    id: 7,
    name: "Matias",
  },
];

export default class UserModel{
    saveUser(userName){
        const lastUserInArray = users[users.length - 1];
        const idOfLastUserInArray = lastUserInArray.id
        const idOfNewUser = idOfLastUserInArray + 1;

        const newUserObject = {
            id: idOfNewUser,
            name: userName
        }

        users.push(newUserObject);

        console.log(users);
    }

}


