/*
💡 Template Method Pattern
    The Template Method Pattern defines the skeleton of an algorithm
    in a base class but lets subclasses override specific steps
    of that algorithm without changing its structure.

👇 Real-world Analogy
    Consider making a cup of tea or coffee:
        Boil water → pour in cup → add coffee or tea → add milk/sugar (optional)
        The steps are similar, but specific parts (e.g. adding ingredients) differ.
        You can define the process once and vary the details.

🧱 Key Components
    Abstract Class with a template method() that defines the sequence of steps.
    Concrete Subclasses that override specific steps.
*/

abstract class Beverage {
    prepareBeverage(): void {
        this.boilWater();
        this.brew();
        this.pourInCup();
        this.addCondiments();
    }

    boilWater(): void {
        console.log('Boiling water...');
    }

    pourInCup(): void {
        console.log('Pouring into cup...');
    }

    abstract brew(): void;
    
    abstract addCondiments(): void;
}

class Cappucino extends Beverage {
    brew(): void {
        console.log('Dripping coffee through filter');
    }

    addCondiments(): void {
        console.log("Adding sugar and milk");
    }
}

class Tea extends Beverage {
    brew(): void {
        console.log("Steeping the tea");
    }

    addCondiments(): void {
        console.log("Adding lemon");
    }
}

const cappucino = new Cappucino();
cappucino.prepareBeverage();

console.log('-----')

const tea = new Tea();
tea.prepareBeverage();