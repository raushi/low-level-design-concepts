// Interface Segregation Principle
// Client should not be forced to depend on interfaces they don't use

import { stat } from "fs";

/*
    🛠️ Your Problem Setup:
        Domain: SmartAppliance
        Features:
            Turn On / Off
            Voice Commands
            Auto Cleaning
        Goal:
            Each appliance implements only the features it actually supports.
*/

type StarRating = 1 | 2 | 3 | 4 | 5;

interface TurnOnOFF {
    toggle(state: "ON"|"OFF") : void;
}

interface VoiceCommand {
    sendVoiceCommands(command: string): void;
}

interface AutoClean {
    start(): void;
}

abstract class SmartAppliance {
    abstract getStarRating(star: StarRating) : number;
    
    troubleShoot(): void {
        console.log("Troubleshooting...")
    }
}

class Refrigerator extends SmartAppliance implements TurnOnOFF, VoiceCommand {
    getStarRating(star: number): number {
        return star;
    }

    toggle(state: "ON" | "OFF"): void {
        console.log(`Refrigerator:: Current state is ${state}!`);
    }

    sendVoiceCommands(command: string): void {
        console.log(`Refrigerator:: Sent command: ${command}`);
    }
}

class Rumba extends SmartAppliance implements TurnOnOFF, VoiceCommand, AutoClean {
    getStarRating(star: number): number {
        return star;
    }

    toggle(state: "ON" | "OFF"): void {
        console.log(`Rumba:: Current state is ${state}!`);
    }

    sendVoiceCommands(command: string): void {
        console.log(`Rumba:: Sent command: ${command}`);
    }

    start(): void {
        console.log('Rumba:: auto clean starting...');
    }
}

const refrigerator = new Refrigerator();
const rumba = new Rumba();

console.log('Refirgerator rating:: ',refrigerator.getStarRating(3));
refrigerator.toggle('ON');
refrigerator.sendVoiceCommands('Turn OFF yourself');
refrigerator.troubleShoot();

console.log('Rumba rating:: ',rumba.getStarRating(4));
rumba.toggle('ON');
rumba.sendVoiceCommands('Take a model map of the room');
rumba.start();
rumba.toggle('OFF');
rumba.troubleShoot();