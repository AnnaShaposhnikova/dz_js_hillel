import $ from "jquery";

import login from "./features/login/login.controller";
import user from "./features/user/user.controller";
import layout from "./core/layout/layout.controller";
import chat from "./features/chat/chat.controller"

export default class MainController {
    constructor($el) {
        this.$root = $el;
        this.loginController = new login(this.$root, {
            onLogin: () => this.userLogon(),
        });
        this.layoutController = new layout(this.$root, {
            onUser: () => this.useUser(),
            onChat: () => this.useChat(),
        });
        this.userController = new user(this.$root);

        this.chatController = new chat(this.$root);

        this.useLogin();
    }

    useLogin() {
        this.loginController.init();
    }
    userLogon() {
        this.clearRoot();
        this.layoutController.init();
    }

    clearRoot() {
        this.$root.empty();
    }
    useLayout() {}
    clearBody() {
        const $body = this.$root.find("#main-container");
        $body.empty();
    }

    useUser() {
        this.clearBody();
        this.userController.init();
    }
    useChat() {
        this.clearBody();
        this.chatController.init();
    }
}
