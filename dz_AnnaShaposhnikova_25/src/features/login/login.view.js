import $, { htmlPrefilter } from "jquery";
import html from "./login.html";

export default class LoginView {
    constructor(options) {
        this.options = options;
    }

    ERROR_MSG = "Field is requared";

    renderLoginForm($contrainer) {
        const $form = this.createForm();
        $contrainer.append($form);
        this.initListeners();
    }
    initListeners() {
        $("#login-btn").on("click", this.onClick);
    }

    onClick = () => {
        const $loginEl = $("#login");

        const $loginVal = $loginEl.val();
        if (!$loginVal) {
            const $error = $(".error").text(this.ERROR_MSG);
            return;
        }
        $(".error").empty();

        $loginEl.val("");

        this.options.login();
    };
    createForm() {
        return html;
    }
}
