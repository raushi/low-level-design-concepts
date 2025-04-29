// Dependency Inversion Principle
// High-level modules should not depend on low-level modules. Both should depend on abstractions.

/*
🚀 Your Task:
    Implement the DIP version:
        Define NotificationChannel interface.

    Implement:
        EmailNotificationChannel
        SMSNotificationChannel
        Build a NotificationService that depends only on NotificationChannel.
        Test it with both Email and SMS.
*/

interface NotificationChannel {
    send(to: string, from: string, message: string): void;
}

class EmailNotificationChannel implements NotificationChannel {
    send(to: string, from: string, message: string): void {
        console.log(`Sending email to ${to} from ${from} and the message is ${message}`);
    }
}

class SMSNotificationChannel implements NotificationChannel {
    send(to: string, from: string, message: string): void {
        console.log(`Sending SMS to ${to} from ${from} and the message is ${message}`);
    }
}

class NotificationService {
    private readonly channel: NotificationChannel;

    constructor(channel: NotificationChannel) {
        this.channel = channel;
    }

    sendMessage(to: string, from: string, message: string) {
        this.channel.send(to, from, message);
    }
}

const emailNotificationChannel = new EmailNotificationChannel();
const smsNotificationChannel = new SMSNotificationChannel();

const notificationService1 = new NotificationService(emailNotificationChannel);
const notificationService2 = new NotificationService(smsNotificationChannel);

notificationService1.sendMessage('earth@planets.com', 'mars@planets.com', 'I have water!!');
notificationService2.sendMessage('earth@planets.com', 'mars@planets.com', 'Hey, Bestie!')
