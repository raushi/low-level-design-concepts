# 🔷 SOLID Principles

**SOLID** is an acronym for five design principles in object-oriented programming that help developers write cleaner, more maintainable, and scalable code.

---

## 🅢 - Single Responsibility Principle (SRP)

**A class should have only one reason to change.**

It should only have one job or responsibility.

🔧 **Use when**: You want to separate concerns and avoid classes doing too much.

✅ *Good*: A `UserService` handles user logic, while `EmailService` sends emails.  
❌ *Bad*: A single class handles user management, emailing, and logging.

---

## 🅞 - Open/Closed Principle (OCP)

**Software entities (classes, modules, functions) should be open for extension but closed for modification.**

You should be able to add new functionality without changing existing code.

🔧 **Use when**: You want to avoid modifying working code and use polymorphism or abstraction instead.

✅ *Good*: Using interfaces or abstract classes to add new behaviors.  
❌ *Bad*: Changing a class each time a new feature is added.

---

## 🅛 - Liskov Substitution Principle (LSP)

**Objects of a superclass should be replaceable with objects of its subclasses without altering the correctness of the program.**

A subclass should behave like its parent class without breaking functionality.

🔧 **Use when**: Creating subclasses to extend behavior safely.

✅ *Good*: A `Square` class behaves like a `Rectangle` if it respects width/height rules.  
❌ *Bad*: Overriding methods in a subclass to throw errors or behave inconsistently.

---

## 🅘 - Interface Segregation Principle (ISP)

**Clients should not be forced to depend on interfaces they do not use.**

It’s better to have many small, specific interfaces than one large general-purpose one.

🔧 **Use when**: Designing interfaces for various client needs.

✅ *Good*: `IPrinter`, `IScanner` instead of one `IMachine`.  
❌ *Bad*: A fat interface with unused methods for most implementations.

---

## 🅓 - Dependency Inversion Principle (DIP)

**High-level modules should not depend on low-level modules. Both should depend on abstractions.**  
**Abstractions should not depend on details. Details should depend on abstractions.**

🔧 **Use when**: You want to decouple classes and make your system more flexible and testable.

✅ *Good*: A service depends on an interface, not a specific database or API.  
❌ *Bad*: Hard-coding dependencies in classes.

---

### 🔚 Summary:

| Principle | Key Idea |
|----------|----------|
| **S** | One class = one responsibility |
| **O** | Extend behavior without modifying code |
| **L** | Subclasses should be substitutable |
| **I** | Prefer small, client-specific interfaces |
| **D** | Depend on abstractions, not concrete implementations |

---

# 🔷 Design Patterns

| Category              | Example Patterns                               | Goal                            |
|-----------------------|------------------------------------------------|---------------------------------|
| **Creational Patterns**   | Singleton, Factory, Builder, Prototype         | How objects are created         |
| **Structural Patterns**   | Adapter, Decorator, Proxy, Composite           | How objects are organized       |
| **Behavioral Patterns**   | Strategy, Observer, Command, State             | How objects behave/interact     |
| **Resilience Patterns**   | Circuit Breaker, Retry, Timeout                | Making systems fault-tolerant   |
| **Cloud Design Patterns** | CQRS, Event Sourcing, API Gateway, Autoscaling | Distributed system architecture |


# 🔷 What are Creational Patterns?

**Creational patterns** are a category of design patterns in object-oriented programming that deal with object creation mechanisms.  
Their main goal is to **create objects in a manner suitable to the situation**, often handling complexity or enforcing constraints (like only one instance).

These patterns **abstract the instantiation process** and help make a system **independent of how its objects are created, composed, and represented**.

## Common Creational Patterns:

### 🔹 Singleton
Ensures a class has only one instance and provides a global point of access to it.  
🔧 **Use when**: Only one object is needed to coordinate actions (e.g., configuration manager, logging).

### 🔹 Factory Method
Defines an interface for creating an object, but lets subclasses alter the type of objects that will be created.  
🔧 **Use when**: You want the client to delegate instantiation to subclasses.

### 🔹 Abstract Factory
Produces families of related or dependent objects without specifying their concrete classes.  
🔧 **Use when**: You want to enforce consistency among products from the same "family".

### 🔹 Builder
Separates the construction of a complex object from its representation, allowing the same construction process to create different representations.  
🔧 **Use when**: You need to create complex objects with many optional parts.

### 🔹 Prototype
Creates new objects by copying an existing object (a prototype), rather than creating from scratch.  
🔧 **Use when**: Object creation is expensive, and copying is more efficient.

---

# 🔷 What are Structural Patterns?

**Structural patterns** are design patterns in object-oriented programming that deal with **how classes and objects are composed to form larger structures**.  
These patterns focus on simplifying relationships between entities, enabling flexibility and reuse.

They help ensure that if one part of a system changes, the rest of the system remains unaffected, promoting **loose coupling** between components.

## Common Structural Patterns:

### 🔹 Adapter
Converts the interface of a class into another interface the client expects.  
🔧 **Use when**: You want to integrate classes with incompatible interfaces without changing their code.

### 🔹 Decorator
Adds new functionality to an object dynamically without altering its structure.  
🔧 **Use when**: You want to add responsibilities to objects at runtime.

### 🔹 Proxy
Provides a surrogate or placeholder for another object to control access to it.  
🔧 **Use when**: You want to add access control, lazy loading, logging, or caching.

### 🔹 Composite
Composes objects into tree structures to represent part-whole hierarchies.  
🔧 **Use when**: You want clients to treat individual objects and compositions uniformly.

### 🔹 Facade
Provides a simplified interface to a complex subsystem.  
🔧 **Use when**: You want to make a subsystem easier to use by hiding internal complexity.

### 🔹 Bridge
Decouples an abstraction from its implementation so that the two can vary independently.  
🔧 **Use when**: You want to avoid a permanent binding between an abstraction and its implementation.

### 🔹 Flyweight
Reduces the cost of creating and manipulating a large number of similar objects.  
🔧 **Use when**: You want to efficiently support large numbers of fine-grained objects.

---

Structural patterns are key to building **flexible, maintainable**, and **scalable** software systems by focusing on how objects are connected and interact.

---

# 🔷 What are Behavioral Patterns?

**Behavioral patterns** are design patterns that focus on **how objects interact and communicate with one another**.  
They help define the flow of control in complex systems, improving flexibility in carrying out communication between objects.

These patterns are particularly useful when you need to manage algorithms, relationships, and responsibilities between interacting objects.

## Common Behavioral Patterns:

### 🔹 Strategy
Defines a family of algorithms, encapsulates each one, and makes them interchangeable.  
🔧 **Use when**: You want to choose an algorithm at runtime without altering the clients that use it.

### 🔹 Observer
Defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified automatically.  
🔧 **Use when**: You need to implement event-based systems like UI listeners or pub-sub models.

### 🔹 Command
Encapsulates a request as an object, thereby allowing you to parameterize clients with queues, requests, and operations.  
🔧 **Use when**: You want to decouple the sender and receiver of requests.

### 🔹 State
Allows an object to alter its behavior when its internal state changes. The object will appear to change its class.  
🔧 **Use when**: You want to change an object's behavior at runtime based on its state.

### 🔹 Chain of Responsibility
Passes a request along a chain of handlers. Each handler can either handle the request or pass it to the next one.  
🔧 **Use when**: You want to decouple the sender and receiver of a request with multiple potential handlers.

### 🔹 Mediator
Defines an object that centralizes complex communications and control logic between objects.  
🔧 **Use when**: You want to reduce direct communication between multiple objects.

### 🔹 Iterator
Provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation.  
🔧 **Use when**: You need to traverse a data structure without exposing its details.

### 🔹 Template Method
Defines the skeleton of an algorithm in a method, deferring some steps to subclasses.  
🔧 **Use when**: You want to let subclasses redefine certain steps of an algorithm without changing its structure.

### 🔹 Visitor
Separates an algorithm from the object structure it operates on.  
🔧 **Use when**: You want to perform operations on elements of an object structure without modifying the classes.

### 🔹 Memento
Captures and externalizes an object's internal state without violating encapsulation, so it can be restored later.  
🔧 **Use when**: You want to provide undo/redo functionality or snapshot/restore features.

- **Originator**: Creates a memento containing a snapshot of its state.
- **Memento**: Stores the state of the Originator.
- **Caretaker**: Keeps track of the memento and decides when to restore it.

---

Behavioral patterns help you **organize interactions** between objects in a flexible, maintainable, and scalable way.

