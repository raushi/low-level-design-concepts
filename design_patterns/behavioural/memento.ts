/*
🧠 Memento Pattern — Overview
    The Memento Pattern allows you to capture and
    restore an object’s internal state without violating encapsulation.
    It's useful for implementing undo/redo functionality.

💡 Real-World Analogy:
    Think of writing a document in a text editor.
    When you press "Undo", the editor restores the previous version of the document.
    That stored version is like a memento.

✅ Components
    Originator: The object whose state needs saving/restoring.
    Memento: A snapshot of the state.
    Caretaker: Manages the memento stack but doesn't modify the contents.
*/

// Memento
class EditorMemento {
    public readonly content: string;
    
    constructor(content: string) {
        this.content = content;
    }
}

// Originator
class TextEditor {
    private content: string = '';

    type(words: string): void {
        this.content += words;
    }

    getContent(): string {
        return this.content;
    }

    save(): EditorMemento {
        return new EditorMemento(this.content);
    }

    restore(memento: EditorMemento) {
        this.content = memento.content;
    }
}

// Caretaker
class TextHistory {
    private mementos: EditorMemento[] = [];

    push(memento: EditorMemento): void {
        this.mementos.push(memento);
    }

    pop(): EditorMemento {
        this.mementos.pop();
        return this.mementos[this.mementos.length - 1];
    }
}

const editor = new TextEditor();
const textHistory = new TextHistory();
textHistory.push(editor.save());

editor.type("Hello, ");
textHistory.push(editor.save());

editor.type("World!");
textHistory.push(editor.save());

console.log(editor.getContent());

editor.restore(textHistory.pop());
console.log(editor.getContent());

editor.restore(textHistory.pop());
console.log(editor.getContent());