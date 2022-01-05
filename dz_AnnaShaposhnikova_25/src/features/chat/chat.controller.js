import ChatView from "./chat.view";
import UserModel from "../user/user.model"
import ChatModel from "./chat.model"
import $ from "jquery";


import("./chat.css");

export default class ChatController {
    constructor($container) {
        this.$container = $container;
        this.View = new ChatView({
            getCurrentUser: () => this.getCurrentUser(),
            
        });
        this.UserModel = new UserModel();
        this.ChatModel = new ChatModel();
    }

    init() {
        this.View.renderChatForm(this.$container);
        const $userContainer = this.$container.find(".sidebar-users");
        const $messageContainer = this.$container
            .find(".chat-body")
            .find(".chat");
        this.UserModel.getUsers().then((users) =>
            this.View.renderUsers(users, $userContainer)
        );
        this.ChatModel.getMessages().then((messages) =>
            this.View.renderMessages(messages, $messageContainer)
        );       
    }

    getCurrentUser(){
        return this.ChatModel.getCurrentUser();     
    }
}

  


