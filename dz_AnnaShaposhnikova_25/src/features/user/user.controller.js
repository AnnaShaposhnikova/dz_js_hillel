import userView from "./user.view";
import userModel from "./user.model";

import("./user.css");

export default class UserController {
    constructor($el, options) {
        this.$container = $el;
        this.options = options;

        this.view = new userView({
            getUser: (userName) => this.getUser(userName),
        });
    }
    init() {
        this.view.renderUserForm(this.$container);
    }

    getUser(userName) {
        const model = new userModel();
        model.saveUser(userName);
        this.options.onSubmit();
    }
}
