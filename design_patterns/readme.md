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
