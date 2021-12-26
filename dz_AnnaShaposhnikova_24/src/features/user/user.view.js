import $ from "jquery";
import html from "./user.html";

export default class UserView {
    constructor(options) {
        this.options = options;
    }

    ERROR_MSG = "Field is requared";

    renderUserForm($contrainer) {       
        const $form = this.createUserForm();
        const $body = $contrainer.find("#main-container");
        $body.append($form);
        this.initListners();
    }

    createUserForm() {
        return html;
    }

    initListners() {
        $("form").on("submit", this.onSubmitClick);
    }

    onSubmitClick = (e) => {
        e.preventDefault();

        const $inputName = $("input");

        const $userName = $inputName.val();
        if (!$userName) {
            const $error = $(".error").text(this.ERROR_MSG);
            return;
        }
        $(".error").empty();
        this.options.getUser($userName);
        $inputName.val("");
    };
}
