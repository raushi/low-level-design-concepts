/*

🏭 Factory Method Pattern
    🎯 Purpose:
        Encapsulate object creation so that the code using the object doesn’t need to know the concrete class being instantiated.
    🤔 Problem It Solves:
        What if:
            You want to create objects of different types, but the client code should be independent of the exact type?
            You want to decide at runtime which class to instantiate?
    🧠 Real-World Analogy:
        Imagine a logistics company:
            There’s a base class Transport
            Depending on the situation, you want to create a Truck or a Ship, but the caller shouldn’t care which one is being used.
        So you create a LogisticsFactory that decides which transport to return.
    🧱 Structure:
            Creator (abstract)
            └── factoryMethod() → Product

            ConcreteCreatorA
            └── factoryMethod() → ProductA

            ConcreteCreatorB
            └── factoryMethod() → ProductB

            Client
            └── uses Product interface, doesn't care which concrete class
*/

interface Shape {
    draw(): void
}

class Circle implements Shape {
    draw(): void {
        console.log('Drawing a Circle...');
    }
}

class Square implements Shape {
    draw(): void {
        console.log('Drawing a Square...');
    }
}

class Rectangle implements Shape {
    draw(): void {
        console.log('Drawing a Rectangle...')
    }
}

class ShapeFactory {
    static createShape(type: string): Shape {
        switch(type.toLowerCase()) {
            case 'circle':
                return new Circle();
            case 'square':
                return new Square();
            case 'rectangle':
                return new Rectangle();
            default:
                throw new Error(`Type not identified: ${type}`);
        }
    }
}

const circle = ShapeFactory.createShape('circle');
circle.draw();

const sqaure = ShapeFactory.createShape('square');
sqaure.draw();

const rectangle = ShapeFactory.createShape('Rectangle');
rectangle.draw();

try {
    const randomShape = ShapeFactory.createShape('random');
    randomShape.draw();
} catch (error) {
    console.error("Caught an error:", (error as Error).message);
}
