/*
🔗 Chain of Responsibility Pattern — Overview
    The Chain of Responsibility pattern allows multiple objects to handle a request, 
    one at a time, in a chain. Each handler decides either to process the request or 
    pass it to the next handler in the chain.

💡 Real-World Analogy:
    Imagine a technical support system:
        First level support tries to resolve the issue.
        If it can’t, it escalates to second-level support.
        Then maybe to a manager.
*/

interface Handler {
    setNext(handler: Handler): Handler;
    handle(level: number): void;
}

abstract class AbstractHandler implements Handler {
    private nextHandler: Handler | null = null;

    setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }

    protected passToNext(level: number): void {
        if (this.nextHandler) this.nextHandler.handle(level);
        else {
            console.log('No one could handle the request');
        }
    }

    abstract handle(level: number): void;
}

class BasicSupportHandler extends AbstractHandler {
    handle(level: number): void {
        if (level === 1 ) {
            console.log("Handled at Basic Support.");
        } else {
            console.log("Escalating from Basic Support...");
            this.passToNext(level);
        }
    }
}

class SupervisorHandler extends AbstractHandler {
    handle(level: number): void {
        if (level === 2) {
            console.log("Handled at Supervisor Level.");
        } else {
            console.log("Escalating from Supervisor...");
            this.passToNext(level); 
        }
    }
}

class ManagerHandler extends AbstractHandler {
    handle(level: number): void {
        if (level === 3) {
            console.log("Handled at Manager Level.");
        } else {
            console.log("Even Manager can't handle this.");
            this.passToNext(level);
        }
    }
}

const basic = new BasicSupportHandler();
const supervisor = new SupervisorHandler();
const manager = new ManagerHandler();

basic.setNext(supervisor).setNext(manager); // Builds the chain: Basic → Supervisor → Manager.

basic.handle(1); // Basic Support
basic.handle(2); // Supervisor
basic.handle(3); // Manager
basic.handle(4); // No one could handle