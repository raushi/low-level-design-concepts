/*
🧠 Bridge Pattern - Concept
    The Bridge pattern decouples an abstraction from its implementation so that the two can vary independently.

👇 Real-World Analogy:
    Think of a remote control (abstraction) and devices like TVs or Radios (implementations).
    A remote can operate various devices, and devices can have multiple remotes.
    The Bridge pattern helps separate their hierarchies.
*/

/*
1. Renderer Interface — acts as the implementation interface.
2. WindowsRenderer & LinuxRenderer — concrete implementations of the Renderer.
3. ShapeA (Abstraction) — bridges the abstraction (ShapeA) and implementation (Renderer).
4. Triangle & Hexagon — extend the abstraction and use Renderer to delegate the rendering logic.
5. Client Code — uses combinations of shapes and renderers to demonstrate flexibility.
*/

interface Renderer {
    renderShape(shapeName: string): void;
}

class WindowsRenderer implements Renderer {
    renderShape(shapeName: string): void {
        console.log(`Rendering ${shapeName} on windows...`);
    }
}

class LinuxRenderer implements Renderer {
    renderShape(shapeName: string): void {
        console.log(`Rendering ${shapeName} on linux...`);
    }
}

abstract class ShapeA {
    protected renderer: Renderer;

    constructor(renderer: Renderer) {
        this.renderer = renderer;
    }

    abstract drawShape(): void;
}

class Triangle extends ShapeA {
    // implicit constructor
    constructor(renderer: Renderer) {
        super(renderer);
    }


   drawShape(): void {
       this.renderer.renderShape('Triangle');
   }
}

class Hexagon extends ShapeA {
    // implicit comstructor
    constructor(renderer: Renderer) {
        super(renderer);
    }

    drawShape(): void {
        this.renderer.renderShape('Hexagon');
    }
}

const windowsRenderer = new WindowsRenderer();
const linuxRenderer = new LinuxRenderer();

const windowsTriangle = new Triangle(windowsRenderer);
const linuxHexagon = new Hexagon(linuxRenderer);

windowsTriangle.drawShape();
linuxHexagon.drawShape();