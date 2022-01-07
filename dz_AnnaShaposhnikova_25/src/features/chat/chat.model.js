// let currentUser =     {
//         userId: "58b1836b588b4679bf50821695585b77",
        
//     };

let messages = [
    {
        id: 12334556,
        userId: 1,
        senderName: "Bob",
        text: "Some message text",
        sendDate: new Date(),
    },
    {
        id: 356456,
        userId: 1,
        senderName: "Bob",
        text: "Nice day, isn'n it?",
        sendDate: new Date(),
    },
    {
        id: 4870498604596,
        userId: 1,
        senderName: "Bob",
        text: "Hello!",
        sendDate: new Date(),
    },
    {
        id: 49539834,
        userId: 1,
        senderName: "Bob",
        text: "Ohhh, it's you again",
        sendDate: new Date(),
    },
    {
        id: 8340940340349458,
        userId: 2,
        senderName: "Djoe",
        text: "Hello, world!",
        sendDate: new Date(),
    },
];

export default class ChatModel {

    getMessages() {
        return Promise.resolve(messages);
    }

    getCurrentUser(){
         return currentUser; 
    } 
}