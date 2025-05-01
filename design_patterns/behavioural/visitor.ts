/*
🧩 Intent:
    The Visitor Pattern allows you to add further operations 
    to objects without having to modify them.
    It separates an algorithm from the object structure it operates on.

💡 Real-World Analogy:
    Imagine you have different types of elements in a document
    (like a paragraph, image, or table), and you want to perform operations
    like spell-checking or exporting to PDF. 
    Instead of adding these operations to every element class, 
    you use a Visitor that can "visit" each element and perform the operation.
*/

// visitor interface
interface DocumentVisitor {
    visitTextElement(element: TextElement): void;
    visitImageElement(element: ImageElement): void;

}

// Element interface
interface DocumentElement {
    accept(visitor: DocumentVisitor): void;
}

// Concrete Element: Text
class TextElement implements DocumentElement {
    private content: string;

    constructor(content: string) {
        this.content = content;
    }

    getText(): string {
        return this.content;
    }

    accept(visitor: DocumentVisitor): void {
        visitor.visitTextElement(this);
    }
}


// Concrete Element: Image
class ImageElement implements DocumentElement {
    private imageUrl: string;

    constructor(imageUrl: string) {
        this.imageUrl = imageUrl;
    }

    getImage(): string {
        return this.imageUrl;
    }

    accept(visitor: DocumentVisitor): void {
        visitor.visitImageElement(this);
    }
}

// Concrete Visitor: Rendering
class RenderVisitor implements DocumentVisitor {
    visitImageElement(element: ImageElement): void {
        console.log(`Rendering image: "${element.getImage()}"`);
    }

    visitTextElement(element: TextElement): void {
        console.log(`Rendering text: "${element.getText()}"`);
    }
}

// Concrete Visitor: Character Counting
class CharacterCountVisitor implements DocumentVisitor {
    private totalChars = 0;

    visitTextElement(element: TextElement): void {
        this.totalChars += element.getText().length;
    }

    visitImageElement(_: ImageElement): void {
        // Images don't contribute to character count
    }

    getTotalChars(): number {
        return this.totalChars;
    }
}

const doc: DocumentElement[] = [
    new TextElement("Hello, world!"),
    new ImageElement("https://example.com/photo.jpg"),
    new TextElement("Visitor pattern is powerful!")
]

const renderer = new RenderVisitor();
const counter = new CharacterCountVisitor();

for (const element of doc) {
    element.accept(renderer);
}

for (const element of doc) {
    element.accept(counter);
}

console.log("Total characters in text:", counter.getTotalChars());