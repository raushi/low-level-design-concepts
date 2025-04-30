/*
🧠 Prototype Design Pattern – Overview
    The Prototype Pattern is used when creating an object is expensive (time/memory),
    and we want to avoid building it from scratch every time.
    Instead, we:
        Create a base object (prototype),
        Clone it when a new similar object is needed,
        Then customize the clone if necessary.
✅ Benefits:
    Speeds up object creation
    Useful for objects with many configuration options
    Keeps instantiation logic clean
*/

interface Prototype<T> {
    clone(): T;
}

class GameCharacter implements Prototype<GameCharacter> {
    name: string;
    health: number;
    attackPower: number;
    abilities: string[];
    
    constructor(name: string, health: number, attackPower: number, abilities: string[]) {
        this.name = name;
        this.health = health;
        this.attackPower = attackPower;
        this.abilities = abilities;
    }

    clone(): GameCharacter {
        return new GameCharacter(this.name, this.health, this.attackPower, [...this.abilities]);
    }

    print() {
        console.log({
            name: this.name,
            health: this.health,
            attackPower: this.attackPower,
            abilities: this.abilities,
        });
    }
}

const warrior = new GameCharacter("Warrior", 100, 20, ["Slash", "Block"]);
const eliteWarriot = warrior.clone();
eliteWarriot.name = 'Elite Warrior';
eliteWarriot.attackPower = 35;
eliteWarriot.abilities.push('Berserk');

warrior.print();
eliteWarriot.print();