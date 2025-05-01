/*
🧩 Strategy Pattern Overview
    The Strategy Pattern allows you to define a family of algorithms,
    encapsulate each one, and make them interchangeable.
    It lets the algorithm vary independently from the clients that use it.

💡 Real-World Analogy
    Think of a navigation app that allows you to choose between different route strategies:
        Fastest Route
        Shortest Route
        Scenic Route
    You can switch the route-finding algorithm without changing the core app.
*/

// Strategy interface
interface PaymentStrategy {
    pay(amount: number): void;
}

// Concrete Strategies
class CreditCardPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Paid $${amount} using Credit Card.`);
    }
}

class PayPalStrategy implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Paid $${amount} using PayPal.`);
    }
}

class ShoppingCart {
    private paymentStrategy: PaymentStrategy;

    constructor(strategy: PaymentStrategy) {
        this.paymentStrategy = strategy;
    }

    setPaymentStrategy(strategy: PaymentStrategy): void {
        this.paymentStrategy = strategy;
    }

    checkout(amount: number): void {
        this.paymentStrategy.pay(amount);
    }
}

const ccPayment = new CreditCardPayment();

const cart = new ShoppingCart(ccPayment);
cart.checkout(100);

cart.setPaymentStrategy(new PayPalStrategy());
cart.checkout(200);