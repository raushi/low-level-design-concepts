/*
🧱 Definition:
    The Facade Pattern provides a simplified, unified interface to a complex subsystem of classes, libraries, or APIs.

✅ When to Use:
    You want to hide the complexities of a system from the client.
    You need to provide a simplified interface to a set of interfaces in a subsystem.
    You want to reduce tight coupling between subsystems and clients.

💡 Real-World Analogy:
    Think of turning on a home theater:
        Normally, you’d need to power on the TV, set the input source, start the sound system, dim the lights, etc.
    A remote control that does all this with a single button press is a Facade.
*/

class Light {
    turnOn(): void {
        console.log('Turning on Lights...');
    }

    turnOff(): void {
        console.log('Turning off Lights...');
    }
}

class Fan {
    start(): void {
        console.log("Turning on Fan...");
    }
    
    stop(): void {
        console.log('Turning off Fan...');
    }
}

class AirConditioner {
    startAC(): void {
        console.log('Turning on AC...');
    }

    stopAC(): void {
        console.log('Turning off AC...');
    }
}

class SmartHomeFacade {
    private fan: Fan = new Fan();
    private lights: Light = new Light();
    private ac: AirConditioner = new AirConditioner();

    activateAllDevices(): void {
        this.lights.turnOn();
        this.fan.start();
        this.ac.startAC();
    }

    deactivateAllDevices(): void {
        this.lights.turnOff();
        this.fan.stop();
        this.ac.stopAC();
    }
}

const smartHome = new SmartHomeFacade();
smartHome.activateAllDevices();
console.log('-------');
smartHome.deactivateAllDevices();