import html from "./chat.html";
// import msg from "./message.html"
import $ from "jquery";
import moment from "moment";
import ChatModel from "../chat/chat.model";

export default class ChatView {
    constructor(options) {
        this.options = options;
        this.ChatModel = new ChatModel();
    }

    renderChatForm($contrainer) {
        const $chatPage = this.createChatForm();
        const $body = $contrainer.find("#main-container");
        $body.append($chatPage);
        this.initListners();
    }

    createChatForm() {
        return html;
    }
    createUserUI(user) {
        return $(
            `<div class="user" id=${user.id}>${
                user.name || user.firstName
            }</div>`
        );
    }
    createMessageUI(message) {
        return $(`
        <div class="msg-container">
             <div class="msg-header">
                <div class="msg-date">${moment(message.sendDate).format(
                    "yyyy MM DD HH:mm"
                )}</div>
                <div class="sender-name">${message.senderName}</div>
        </div>
    <div class="msg-body">${message.text}</div>
</div>
        `);
    }

    renderUsers(users, $container) {
        // console.log(users)
        users.forEach((user) => {
            const containerForOneUser = this.createUserUI(user);
            $container.append(containerForOneUser);
        });
    }

    renderMessages(messages, $container) {
        messages.forEach((message) => {
            const containerForOneMessage = this.createMessageUI(message);
              const sideCLassName =
                  currentUserId === msg.postedByUser._id ? "right" : "left";
            // const sideClassName =
                // currentUser.id === message.id ? "left" : "right";
                // Math.random() > 0.5 ? "left" : "right";
            containerForOneMessage.addClass(sideClassName);
            $container.append(containerForOneMessage);
        });
    }

    initListners() {
        $(".chat-btn").on("click", this.onBtnChatClick);
        $(".sidebar-users").on("click", this.onUserChatClick);
        $("#user-link").on("click", this.onUserChatClick);
    }

   onBtnChatClick = async (e) => {
        const msgText = $(".chat-text").val();
        if (!msgText) {
            return;
        }
        const currentUser = this.options.getCurrentUser();

          const msg =JSON.stringify({
              postedByUser: await this.ChatModel.getCurrentUser._id,
              message: msgText,
              chatRoomId: await this.ChatModel.getCurrentUser._id,
          });
          this.options.socketSend(msg);
        // const msg = {
        //     id: Math.random(),
        //     userId: currentUser.id,
        //     senderName: currentUser.senderName,
        //     text: msgText,
        //     sendDate: new Date(),
        // };

        const containerForOneMessage = this.createMessageUI(msg);
        const sideClassName = currentUser.id === msg.id ? "left" : "right";

        containerForOneMessage.addClass(sideClassName);
        const $container = $(".chat");
        $container.append(containerForOneMessage);

        $(".chat-text").val(" ");
    };

    onUserChatClick = (e) => {
        const id = e.target.id;
        // const userModel = new UserModel();
        // const currentUser = userModel
        //     .getUsers()
        //     .then((users) => users.find((user) => user.id === id));
    };
}
