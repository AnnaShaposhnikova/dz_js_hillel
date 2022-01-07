import userView from "./user.view";
import userModel from "./user.model";

import("./user.css");

export default class UserController {
    constructor($el, options) {
        this.$container = $el;
        this.options = options;

        this.view = new userView({
            getUser: (userObj) => this.getUser(userObj),
        });
    }
    init() {
        this.view.renderUserForm(this.$container);
    }

    getUser(userObj) {
        const model = new userModel();
        model.saveUser(userObj);
        this.options.onSubmit();
    }
}
