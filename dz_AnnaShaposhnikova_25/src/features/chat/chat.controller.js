import ChatView from "./chat.view";
import UserModel from "../user/user.model"
import ChatModel from "./chat.model"
import $ from "jquery";

import WSService from "../../core/services/WSService"

import("./chat.css");

export default class ChatController {
    constructor($container) {
        this.$container = $container;
        this.ChatView = new ChatView({
            getCurrentUser: () => this.getCurrentUser(),
            socketSend: (msg) => this.socketSend(msg),
            
        });
        this.UserModel = new UserModel();
        this.ChatModel = new ChatModel();
        this.socket = new WebSocket(WSService.API);
        this.openSocket()
    }
      

    init() {
        this.ChatView.renderChatForm(this.$container);
        const $userContainer = this.$container.find(".sidebar-users");
        const $messageContainer = this.$container
            .find(".chat-body")
            .find(".chat");
        this.UserModel.getUsers().then((users) =>
            this.ChatView.renderUsers(users, $userContainer)
        );
        this.ChatModel.getMessages().then((messages) =>
            this.ChatView.renderMessages(messages, $messageContainer)
        );       
    }

    getCurrentUser(){
        return this.ChatModel.getCurrentUser();     
    }
    openSocket(){
        this.socket.onopen = (e) => {
         console.log('SOCKET IS OPEN');
         this.onMsg()
        }
    }
    onMsg(){
        this.socket.onmessage = function (e) {
            console.log(e.data)
            return
            const msg = JSON.parse(e.data);
            const $messageContainer = this.$container
                .find(".chat-body")
                .find(".chat");
            this.ChatView.renderMessages(msg, $messageContainer);
            console.log(msg);
        }
     }
     socketSend(msg){
         const DOMString = JSON.stringify(msg);
         this.socket.send(DOMString);
     }


}


  


