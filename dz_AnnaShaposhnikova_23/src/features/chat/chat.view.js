import html from "./chat.html";

export default class ChatView {
    constructor() {}
    renderUsers($container) {}

    renderChatForm($contrainer) {
        console.log("chat", $contrainer);
        const $chatPage = this.createChatForm();
        const $body = $contrainer.find("#main-container");
        $body.append($chatPage);
    }

    createChatForm() {
        return html;
    }
}
