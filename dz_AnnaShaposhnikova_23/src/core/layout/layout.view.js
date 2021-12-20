import $ from "jquery";
import html from "./layout.html";

export default class LayoutView {
    constructor(options) {
        this.options = options;
    }

    renderLayout($contrainer) {
        const $layout = this.createLayout();
        $contrainer.append($layout);
        this.initListners();
    }
    createLayout() {
        return html;
    }
    initListners() {
        $("#user-link").on("click", this.onUserClick);
        $("#chat-link").on("click", this.onChatClick);
    }

    onUserClick = (e) => {
        e.preventDefault();
        this.options.user();
    };

    onChatClick = (e) => {
        e.preventDefault();
        this.options.chat();
    };
}
