/*
🧩 Iterator Pattern Overview
    The Iterator Pattern provides a way to access the elements
    of a collection sequentially without exposing its underlying representation.

💡 Real-World Analogy
    Imagine a TV remote that allows you to scroll through a list of channels one by one — 
    you don’t need to know how those channels are stored.
*/

// Iterator interface
interface MyIterator<T> {
    hasNext(): boolean;
    next(): T;
}

// Aggregate Interface
interface IterableCollection<T> {
    createIterator(): MyIterator<T>;
}

// Concrete collection
class NameRepository implements IterableCollection<string> {
    private names: string[] = ["Alice", "Bob", "Charlie", "Daniel", "Lewis"];

    createIterator(): MyIterator<string> {
        return new NameIterator(this.names);
    }
}

class NameIterator implements MyIterator<string> {
    private names: string[];
    private index: number = 0;

    constructor(names: string[]) {
        this.names = names;
    }

    hasNext(): boolean {
        return this.index < this.names.length;
    }

    next(): string {
        return this.names[this.index++];
    }
}

const namesRepo = new NameRepository();
const iterator = namesRepo.createIterator();

while(iterator.hasNext()) {
    console.log(iterator.next());
}