/*
🧠 Flyweight Pattern — Quick Intro
    The Flyweight Pattern is used to minimize memory usage by sharing as much data as possible with similar objects. 
    It's particularly useful when:
        You have a large number of objects.
        Many of them share common, intrinsic (unchanging) data.

🎯 Real-World Analogy
    Think of a text editor. Each character (a, b, c, etc.) has:
        Shared intrinsic data → font, size, style (stored once).
        Unique extrinsic data → position in the document (stored separately).
    Instead of creating a separate object for every character, the editor reuses shared glyphs.
*/

class TreeType {
    private texture: string;
    private colour: string;
    private name: string;
    
    constructor(texture: string, colour: string, name: string) {
        this.texture = texture;
        this.colour = colour;
        this.name = name;
    }

    draw(x: number, y: number): void {
        console.log(`Drawing ${this.name} tree at (${x}, ${y}) with ${this.colour} color and ${this.texture} texture`);
    }
}

class Tree {
    private x: number;
    private y: number;
    private type: TreeType;

    constructor(x: number, y: number, type: TreeType) {
        this.x = x;
        this.y = y;
        this.type = type;
    }

    draw(): void {
        this.type.draw(this.x, this.y);
    }
}

class TreeFactory {
    private static treeTypes: Map<string, TreeType> = new Map();

    static getTreeType(name: string, colour: string, texture: string): TreeType {
        const key = `${name}-${colour}-${texture}`;

        if (!this.treeTypes.has(key)) {
            this.treeTypes.set(key, new TreeType(texture, colour, name));
        }

        return this.treeTypes.get(key)!;

    }

    static getTotalTreeTypes(): number {
        return this.treeTypes.size;
    }
}

const trees: Tree[] = [];

trees.push(new Tree(10, 20, TreeFactory.getTreeType("Oak", "Green", "Rough")));
trees.push(new Tree(11, 21, TreeFactory.getTreeType("Oak", "Green", "Rough")));
trees.push(new Tree(12, 22, TreeFactory.getTreeType("Pine", "Dark Green", "Smooth")));

for (const tree of trees) {
    tree.draw();
}

console.log(`Total unique tree types created: ${TreeFactory.getTotalTreeTypes()}`);