/*
🧩 Command Pattern Overview
    The Command Pattern encapsulates a request as an object, allowing you to:
        Parameterize clients with different requests
        Queue or log requests
        Support undoable operations

💡 Real-World Analogy
    Think of a TV remote:
        each button is mapped to a command (turn on/off, volume up/down).
        You press a button (invoke the command), and it performs an action on the TV (the receiver).
*/

// Command interface
interface Command {
    execute(): void;
}

// reciever
class TubeLight {
    turnOn(): void {
        console.log("Light is ON");
    }

    turnOff(): void {
        console.log("Light is OFF");
    }
}

// Concrete Commands
class TurnOnCommand implements Command {
    private tubeLight: TubeLight;

    constructor(tubeLight: TubeLight) {
        this.tubeLight = tubeLight;
    }

    execute(): void {
        this.tubeLight.turnOn();
    }
}

class TurnOffCommand implements Command {
    private tubeLight: TubeLight;

    constructor(tubeLight: TubeLight) {
        this.tubeLight = tubeLight;
    }

    execute(): void {
        this.tubeLight.turnOff();
    }
}

// Invoker
class RemoteControl {
    private command: Command;

    constructor(command: Command) {
        this.command = command;
    }

    setCommand(command: Command) {
        this.command = command;
    }

    pressButton(): void {
        this.command.execute();
    }
}

// Client
const tubeLight = new TubeLight();
const remote = new RemoteControl(new TurnOnCommand(tubeLight));
remote.pressButton();

remote.setCommand(new TurnOffCommand(tubeLight));
remote.pressButton();

