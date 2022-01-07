

let messages = [
    // {
    //     id: 12334556,
    //     userId: 1,
    //     senderName: "Bob",
    //     text: "Some message text",
    //     sendDate: new Date(),
    // },
    // {
    //     id: 356456,
    //     userId: 1,
    //     senderName: "Bob",
    //     text: "Nice day, isn'n it?",
    //     sendDate: new Date(),
    // },
    // {
    //     id: 4870498604596,
    //     userId: 1,
    //     senderName: "Bob",
    //     text: "Hello!",
    //     sendDate: new Date(),
    // },
    // {
    //     id: 49539834,
    //     userId: 1,
    //     senderName: "Bob",
    //     text: "Ohhh, it's you again",
    //     sendDate: new Date(),
    // },
    // {
    //     id: 8340940340349458,
    //     userId: 2,
    //     senderName: "Djoe",
    //     text: "Hello, world!",
    //     sendDate: new Date(),
    // },
];
const messageMOdel = {
    userId: "number",
    senderName: "string",
    text: "string",
    sendDate: "Date",
    isShown: "boolean",
    isEdited: "boolean",
    chatId: "number",
};

export default class ChatModel {  

    getMessages() {
        return Promise.resolve(messages);
    }

    getCurrentUser(){
         return JSON.parse(sessionStorage.getItem("currentUser"));  
    }    
    
}