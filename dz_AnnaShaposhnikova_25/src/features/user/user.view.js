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

        const $firstNameEl = $("#first-name");

        const $firstNameVal = $firstNameEl.val();
        if (!$firstNameVal) {
            const $error = $(".error").text(this.ERROR_MSG);
            return;
        }
        const newUserObj = {
            firstName: $firstNameVal,
            lastName: "asd",
            type: "consumer",
        }

        $(".error").empty();
        this.options.getUser(newUserObj);
        $firstNameEl.val("");
    };
    
}
