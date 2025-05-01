/*
✅ Concept: State Pattern
    The State Pattern allows an object to alter its behavior when its internal state changes. 
    It appears as if the object has changed its class.

☕ Real-world Analogy:
    Think of a Document that can be in Draft, Moderation, or Published state. 
    The behavior of actions like edit() or publish() changes based on the current state.
*/

// State interface
interface State {
    handle(context: DocumentContext): void;
    getName(): string;
}

// Context
class DocumentContext {
    private state: State;

    constructor(initialState: State) {
        this.state = initialState;
        console.log(`Initial State: ${this.state.getName()}`);
    }

    setState(state: State) {
        this.state = state;
        console.log(`State changed to: ${this.state.getName()}`);
    }

    request(): void {
        this.state.handle(this);
    }
}

class DraftState implements State {
    getName(): string {
        return "DRAFT";
    }

    handle(context: DocumentContext): void {
        console.log("Document is in Draft. Moving to Moderation.");
        context.setState(new ModerationState());
    }
}

class ModerationState implements State {
    getName(): string {
        return "MODERATION";
    }

    handle(context: DocumentContext): void {
        console.log('Document is under Review. Moving to Published.')
        context.setState(new PublishedState());
    }
}

class PublishedState implements State {
    getName(): string {
        return "PUBLISHED";
    }

    handle(context: DocumentContext): void {
        console.log('Document is already published. No further state transitions.');
    }
}

const docu = new DocumentContext(new DraftState());
docu.request();
docu.request();
docu.request();
docu.request();
