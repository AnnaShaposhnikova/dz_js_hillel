import $ from "jquery";

export default class ChatView {
    constructor() {}
    renderUsers($container) {}

    renderChatForm($contrainer) {
        console.log("chat", $contrainer);
        const $chatPage = this.createChatForm();
        const $body = $contrainer.find("#main-container");
        $body.append($chatPage);
        // this.initListners();
    }

    createChatForm() {
        return $(`
  
        <div id="chat">           
            <div class="chat-page">
            <div class= "sidebar-users">
                users!!!!!!!!!!!!
            </div>
            <div class = "chat-body"><div>
                chat!!!!!!!!!!!!!!!!!
            </div>
            </div> 
        </div>

        `);
    }
}
