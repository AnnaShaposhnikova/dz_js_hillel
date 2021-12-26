import $, { htmlPrefilter } from "jquery";
import html from "./login.html";

export default class LoginView {
    constructor(options) {
        this.options = options;
    }

    renderLoginForm($contrainer) {
        const $form = this.createForm();
        $contrainer.append($form);
        this.initListeners();
    }
    initListeners() {
        $("#login-btn").on("click", this.onClick);
    }

    onClick = () => {
        this.options.login();
    };
    createForm() {
        return html;
    }
}
