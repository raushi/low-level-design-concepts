/*
Composite Design Pattern 
    — it’s very useful when dealing with tree-like structures, 
    where individual objects and compositions of objects should be treated uniformly.

🌳 Real-World Analogy
    Think of a file system:
        A file is a leaf.
        A folder can contain files or other folders (i.e., a composite).
        You can perform the same operations (like getSize(), show()) on both.
*/

interface OrgComponent {
   showDetails(indent?: string): void;
}

class Employee implements OrgComponent {
    private name: string;
    private desg: string;

    constructor(name: string, desg: string) {
        this.name = name;
        this.desg = desg;
    }

    showDetails(indent: string = ''): void {
        console.log(`${indent}Employee: ${this.name} - ${this.desg}`)
    }
}

class Department implements OrgComponent {
    private children: OrgComponent[] = [];

    constructor(private name?: string) {
        // console.log(`Department: ${name} initialized...`);
    }

    add(item: OrgComponent): void {
        this.children.push(item);
    }

    showDetails(indent: string = ''): void {
        console.log(`${indent}Department: ${this.name}`);
        for (const child of this.children) {
            child.showDetails(indent+'   ');
        }
    }
}

const alice = new Employee('Alice', 'Software Engineer');
const bob = new Employee('Bob', 'Backend Developer');
const charlie = new Employee('Charlie', 'Frontend Developer')
const engineeringDept = new Department('Engineering');
engineeringDept.add(alice);
const backendDept = new Department('Backend');
backendDept.add(bob);
const frontendDept = new Department('Frontend');
frontendDept.add(charlie);
engineeringDept.add(backendDept);
engineeringDept.add(frontendDept);

engineeringDept.showDetails();