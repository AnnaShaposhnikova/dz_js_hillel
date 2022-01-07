import $, { htmlPrefilter } from "jquery";
import html from "./login.html";
import UserModel from "../user/user.model";
import Schema from "validate";


const userForm = new Schema({
    firstName: {
        type: String,
        required: true,
        length: { min: 3, max: 32 },          
        message: {
            type: "First name must be a string.",
            required: "First name is required.",
            length: "First name must be from 3 to 32 symbols",
           
        },
    },

    password: {
        required: true,
        length: { min: 8 },
        message: {
            required: "Password is required.",
            length: "Password length must be more than 8  symbols",
        },
    },
});

export default class LoginView {
    constructor(options) {
        this.options = options;
    }

   UserModel = new  UserModel();

    renderLoginForm($contrainer) {
        const $form = this.createForm();
        $contrainer.append($form);
        this.initListeners();
    }
    initListeners() {
        $("#login-btn").on("click", this.onClick);
    }

    onClick = async () => {
        const $loginEl = $("#login");
        const $passwordEl = $("#password");
        const $loginVal = $loginEl.val();
        const $passwordVal = $passwordEl.val();

        const errors = userForm.validate({
            firstName: $loginVal,
            password: $passwordVal,
        });
     

        console.log(await this.UserModel.isUserNameExists($loginVal));

         if (
             $loginVal &&
             !await this.UserModel.isUserNameExists($loginVal)
         ) {
             errors.push({
                 path: "firstName",
                 message: "User does not exist",
             });
         } 

        if($passwordVal && !await this.UserModel.isPasswordExists($loginVal, $passwordVal)){
              errors.push({
                  path: "password",
                  message: "Password is not correct",
              });
        }
        
        // console.log(errors);

        sessionStorage.setItem("currentUser", "");
        const currentUser = await this.UserModel.isUserNameExists($loginVal);
        sessionStorage.setItem("currentUser", JSON.stringify(currentUser));

        $(".error").empty();
        if (errors.length > 0) {
            errors.forEach((error) => {
                $(`.${error.path}`).text(`${error.message}`);
            });             
        return;
        }       

        $loginEl.val("");
        $passwordEl.val("");
        this.options.login();
    };
    createForm() {
        return html;
    }

  

}
