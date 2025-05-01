/*
🔁 Observer Pattern Overview
    The Observer Pattern defines a one-to-many dependency between objects
    so that when one object (subject) changes state, all its dependents (observers)
    are notified and updated automatically.

🧠 Real-World Analogy
    Think of a YouTube Channel (Subject).
    Viewers (Observers) can subscribe to it. 
    When a new video is uploaded, all subscribers get notified.
*/

// Observer interface
interface Subscriber {
    update(channelName: string, videoTitle: string): void;
}

// Subject interface
interface Channel {
    subscribe(subscriber: Subscriber): void;
    unsubscribe(subscriber: Subscriber): void;
    notifySubscribers(videoTitle: string): void;
}

// Concrete Subject
class YouTubeChannel implements Channel {
    private subscribers: Subscriber[] = [];
    private channelName: string;
    
    constructor(channelName: string) {
        this.channelName = channelName;
    }

    subscribe(subscriber: Subscriber): void {
        this.subscribers.push(subscriber);
    }

    unsubscribe(subscriber: Subscriber): void {
        this.subscribers = this.subscribers.filter((sub) => sub !== subscriber);
    }

    uploadVideo(videoTitle: string): void {
        console.log(`📢 ${this.channelName} uploaded a new video: ${videoTitle}`);
        this.notifySubscribers(videoTitle);
    }

    notifySubscribers(videoTitle: string): void {
        for (const subscriber of this.subscribers) {
            subscriber.update(this.channelName, videoTitle);
        }
    }
}

// Concrete Observers
class User implements Subscriber {
    private username: string;

    constructor(username: string) {
        this.username = username;
    }

    update(channelName: string, videoTitle: string): void {
        console.log(`🔔 Hey ${this.username}, new video "${videoTitle}" uploaded on ${channelName}`);
    }
}

const channel = new YouTubeChannel('Place Holder');

const daniel = new User('Daniel');
const lewis = new User('Lewis');

channel.subscribe(daniel)
channel.subscribe(lewis);

channel.uploadVideo('Observer pattern explained!!');