import userController from "./user.controller";
import $ from "jquery";
import HTTPService from "../../core/services/HTTPService";
import enviorontment from "../../core/services/environment"

let users = [
    // {
    //     id: 1,
    //     name: "Bob",
    // },

    // {
    //     id: 2,
    //     name: "Djoe",
    // },

    // {
    //     id: 3,
    //     name: "Iren",
    // },

    // {
    //     id: 4,
    //     name: "Tom",
    // },

    // {
    //     id: 5,
    //     name: "Helen",
    // },

    // {
    //     id: 6,
    //     name: "Nike",
    // },

    // {
    //     id: 7,
    //     name: "Matias",
    // },
];

export default class UserModel {
    httpService = new HTTPService();

    saveUser(user) {
        // return HTTPService.post(enviorontment.Users.createUser);
        return this.httpService.post(enviorontment.Users.createUser, user);
    }
    // saveUser(userName) {
    //     const lastUserInArray = users[users.length - 1];
    //     const idOfLastUserInArray = lastUserInArray.id;
    //     const idOfNewUser = idOfLastUserInArray + 1;

    //     const newUserObject = {
    //         id: idOfNewUser,
    //         name: userName,
    //     };

    //     users.push(newUserObject);
    // }

    getUsers() {       
        return this.httpService.get(enviorontment.Users.getUsers);
    }

    isUserNameExists(userName){
         return this.getUsers() 
        //  .then((users)=> console.log(users))      
          .then((users) => users.find((user) => user.firstName === userName));

    }

    isPasswordExists(userName, userId){  //id из базы
        return this.getUsers()
        .then((users) => users.find((user) => (user.firstName === userName)&& (user._id === userId))
        );
    }

    getToken(user) {
        return this.httpService.login(enviorontment.Users.login)  
    }
}
