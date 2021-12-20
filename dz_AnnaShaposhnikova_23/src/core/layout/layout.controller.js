import LayoutView from "./layout.view";
import("./layout.css");

export default class LayoutController {
    constructor($el, options) {
        this.$container = $el;
        this.options = options;
        this.view = new LayoutView({
            user: () => this.onUser(),
            chat: () => this.onChat(),
        });
    }

    init() {
        this.view.renderLayout(this.$container);
    }

    onUser() {
        this.options.onUser();
    }
    onChat() {
        this.options.onChat();
    }
}
