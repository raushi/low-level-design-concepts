/*
🧱 Builder Pattern — Overview
    📌 Problem:
    You want to construct a complex object step-by-step, but:
        The object has many optional parameters
        Using constructors becomes messy or unreadable
        Object construction logic should be separated from the object structure

    ✅ Solution:
        Use a Builder class that:
            Constructs the object step-by-step
            Can enforce the build order if needed
            Can support method chaining

    👷 Real-world Analogy:
    Think of building a custom burger at a restaurant:
        You choose the bun, patty, cheese, sauce, etc.
        The order matters
        Some ingredients are optional
*/

class Computer {
    private CPU: string;
    private RAM: string;
    private storage: string;
    private GPU: string;
    private operatingSystem: string;

    constructor(CPU: string, RAM: string, storage: string, GPU: string, operatingSystem: string) {
        this.CPU = CPU;
        this.RAM = RAM;
        this.storage = storage
        this.GPU = GPU;
        this.operatingSystem = operatingSystem;
    }

    getSpecs(): void {
        console.log({
            CPU: this.CPU,
            RAM: this.RAM,
            Storage: this.storage,
            GPU: this.GPU,
            OS: this.operatingSystem, 
        });
    }
}

class ComputerBuilder {
    private CPU: string = '4 vCPU';
    private RAM: string = '8 GB';
    private storage: string = '512 GB';
    private GPU: string = 'NA';
    private operatingSystem: string = 'Windows';

    setCPU(CPU: string): ComputerBuilder {
        this.CPU = CPU;
        return this;
    }

    setRAM(RAM: string): ComputerBuilder {
        this.RAM = RAM;
        return this;
    }

    setStorage(storage: string): ComputerBuilder {
        this.storage = storage;
        return this;
    }

    setGPU(GPU: string): ComputerBuilder {
        this.GPU = GPU;
        return this;
    }

    setOS(os: string): ComputerBuilder {
        this.operatingSystem = os;
        return this;
    }

    build(): Computer {
        return new Computer(this.CPU, this.RAM, this.storage, this.GPU, this.operatingSystem);
    }

}

const computer = new ComputerBuilder()
    .setCPU('8 vCPU')
    .setRAM('16 GB')
    .setStorage('1 TB')
    .setGPU('Nvidia')
    .setOS('Linux')
    .build();

computer.getSpecs();