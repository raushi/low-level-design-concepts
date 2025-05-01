/*
🤝 Mediator Pattern — Overview
    The Mediator Pattern is used to reduce the 
    complexity and dependencies between tightly coupled objects
    by introducing a mediator object that handles communication between them.

🧠 Real-World Analogy:
    Think of an air traffic controller at an airport.
    Pilots don’t communicate with each other directly.
    Instead, they coordinate through the controller (mediator),
    who ensures smooth communication and avoids collisions.
*/

interface Mediator {
    sendMessage(message: string, sender: ChatUser): void;
}

class ChatRoom implements Mediator {
    private chatUsers: ChatUser[] = [];

    register(user: ChatUser): void {
        this.chatUsers.push(user);
    }

    sendMessage(message: string, sender: ChatUser): void {
        for (const user of this.chatUsers) {
            if (user !== sender) {
                user.recieve(message, sender);
            }
        }
    }
}

class ChatUser {
    private name: string;
    private mediator: Mediator

    constructor(name: string, mediator: Mediator) {
        this.name = name;
        this.mediator = mediator;
    }

    send(message: string): void {
        console.log(`${this.name} sends: ${message}`);
        this.mediator.sendMessage(message, this);
    }

    recieve(message: string, sender: ChatUser): void {
        console.log(`${this.name} received from ${sender.name}: ${message}`);
    }
}

const chatRoom = new ChatRoom();
const tom = new ChatUser('Tom', chatRoom);
const jerry = new ChatUser('Jerry', chatRoom);
const apollo = new ChatUser('Apollo', chatRoom); 

chatRoom.register(tom);
chatRoom.register(jerry);
chatRoom.register(apollo);

tom.send('Hello from Tom!');
jerry.send('Hi Tom! This is Jerry!');
apollo.send('Hi Tom! This is Apollo!');