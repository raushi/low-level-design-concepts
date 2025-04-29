/*
Singleton Pattern

    Problem
        You want to ensure only one instance of a class is created, and you need a global point of access to it.
    Example
        Database connection pool
        Logger Service
        Configuration Manager
    Real Life Analogy	
        CEO of a company → Only one CEO exists at a time.

    Structure:
        Class
        └── private static instance
        └── private constructor
        └── public static getInstance()
        
        Constructor is private → So no one can call new.
        getInstance() ensures only one object ever created.
*/

class DatabaseConnection {
    private static connection: DatabaseConnection;
    private id: number;

    private constructor() {
        this.id = Math.floor(Math.random() * 1000);
        console.log(`Connection initialized with id: ${this.id}`);
    }

    public static getConnection(): DatabaseConnection {
        if (!DatabaseConnection.connection) {
            this.connection = new DatabaseConnection();
        }
        return DatabaseConnection.connection;
    }

    public connect(): void {
        console.log("connected to the database");
    }

    public getId(): number {
        return this.id;
    }
}

const db1 = DatabaseConnection.getConnection();
const db2 = DatabaseConnection.getConnection();

db1.connect();
db2.connect();

console.log("Are both the same instance?", db1 === db2); // true
console.log("db1 ID:", db1.getId());
console.log("db2 ID:", db2.getId());