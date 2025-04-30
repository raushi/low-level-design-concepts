/*
    The Decorator Pattern is used to add new functionality to objects dynamically without altering their structure.

    👇 Real-world analogy:
        Think of a basic coffee. You can decorate it with milk, sugar, or whipped cream—each enhancing the original without changing it.
*/

interface Coffee {
    makeCoffee(): void;
}

class SimpleCoffee implements Coffee {
    makeCoffee(): void {
        console.log('making simple coffee...');
    }
}

abstract class CoffeeDecorator implements Coffee {
    protected decoratorCoffee: Coffee;

    constructor(coffee: Coffee) {
        this.decoratorCoffee = coffee;
    }

    abstract makeCoffee(): void;
}

class MilkDecorator extends CoffeeDecorator {
    constructor(coffee: Coffee) {
        super(coffee); // Calls the constructor in the base abstract class
    }

    makeCoffee(): void {
        this.decoratorCoffee.makeCoffee();
        console.log('adding milk to coffee...')
    }
}

class SugarDecorator extends CoffeeDecorator {
    constructor(coffee: Coffee) {
        super(coffee); // Calls the constructor in the base abstract class
    }

    makeCoffee(): void {
        this.decoratorCoffee.makeCoffee();
        console.log('adding sugar to coffee...');
    }
}

class WhippedCreamDecorator extends CoffeeDecorator {
    constructor(coffee: Coffee) {
        super(coffee); // Calls the constructor in the base abstract class
    }

    makeCoffee(): void {
        this.decoratorCoffee.makeCoffee();
        console.log('adding whipped cream on top of coffee....')
    }
}

const coffee = new SimpleCoffee();
const milkCoffee = new MilkDecorator(coffee);
const sweetMilkCoffee = new SugarDecorator(milkCoffee);
const sweetMilkCoffeeWithWhippedCreamOnTop = new WhippedCreamDecorator(sweetMilkCoffee);

sweetMilkCoffeeWithWhippedCreamOnTop.makeCoffee();

/*
Then in your concrete decorators like MilkDecorator, 
you're not explicitly declaring a constructor, 
but behind the scenes, you're implicitly calling the constructor of the base class 
using super(coffee) because JavaScript/TypeScript requires it if you want to use this.decoratorCoffee.

So you can pass the object in the constructor 
because the class has access to the base class constructor through super(...).
*/


/*
🔄 How the Decoration Works
    Let's break down this line:
        const sweetMilkCoffeeWithWhippedCreamOnTop = new WhippedCreamDecorator(
            new SugarDecorator(
                new MilkDecorator(
                    new SimpleCoffee()
                )
            )
        );
    This nests decorators like a Russian doll:
        SimpleCoffee is the core object.
        MilkDecorator wraps the SimpleCoffee.
        SugarDecorator wraps the milk-decorated coffee.
        WhippedCreamDecorator wraps that whole thing.

    Each decorator:
        Accepts a Coffee object (which could be either the base or another decorator).
        Calls makeCoffee() on it, i.e., delegates the call downward.
        Then adds its own behavior (e.g., "adding sugar...").

    🧾 Execution Flow
        When you call:
            sweetMilkCoffeeWithWhippedCreamOnTop.makeCoffee();
        The output is:
            making simple coffee...
            adding milk to coffee...
            adding sugar to coffee...
            adding whipped cream on top of coffee....
        Here's what happens under the hood:
            WhippedCreamDecorator.makeCoffee() is called
                It calls SugarDecorator.makeCoffee()
                    Which calls MilkDecorator.makeCoffee()
                        Which calls SimpleCoffee.makeCoffee() – prints "making simple coffee..."
                            Then each decorator adds its line on the way back up the call stack:
                    Milk → "adding milk..."
                Sugar → "adding sugar..."
            Whipped cream → "adding whipped cream..."

📌 Why It’s Powerful:
    You can stack functionality dynamically.
    You can reuse decorators across objects without changing existing code.
    It follows Open/Closed Principle: open for extension, closed for modification.
*/