import ChatView from "./chat.view";

import("./chat.css");

export default class ChatController {
    constructor($container) {
        this.$container = $container;
        this.view = new ChatView();
    }

    init() {
        this.view.renderChatForm(this.$container);
    }
}
