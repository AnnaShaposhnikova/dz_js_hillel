import loginView from "./login.view";
import("./login.css");

export default class LoginController {
    constructor($el, options) {
        this.options = options;
        this.$container = $el;
        this.view = new loginView({ login: () => this.onLogin() });
    }

    init() {
        this.view.renderLoginForm(this.$container);
    }
    onLogin() {
        this.options.onLogin();
    }
}
