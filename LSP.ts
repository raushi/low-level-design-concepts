// Liskov Substitution Principle
// Subclasses should be substitutable for their base class

/*
    Problem:
        You have a Bird base class.
        All birds can fly.
        Later, you realize that Penguin is a bird but cannot fly.

    Goal:
        Design your class hierarchy in such a way that:
            Penguin can be treated as a Bird
            No unexpected behavior when replacing Bird with Penguin
*/

abstract class Bird {
    abstract makeSound(): void;

    mate(): void {
        console.log("Mating...")
    }
}

abstract class FlyingBird extends Bird {
    abstract fly(): void;
}

class Sparrow extends FlyingBird {
    fly(): void {
        console.log("Sparrow is flying!")
    }

    makeSound(): void {
        console.log("chirp! chirp!")
    }
}

class Penguin extends Bird {
    makeSound(): void {
        console.log("Squak!")
    }
}

const sparrow = new Sparrow();
sparrow.fly();
sparrow.makeSound();
sparrow.mate();

const penguin = new Penguin();
penguin.makeSound();
penguin.mate();