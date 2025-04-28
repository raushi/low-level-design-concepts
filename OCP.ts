// Open / Closed Principle
// Software entities should be open for extension but closed for modification

/*
    Context:
        You are building a discount calculation system for a shopping application.
        At first, your system only supports regular customers (no discount).
        Later, you need to add premium customers (10% discount) and VIP customers (20% discount).

    Requirements:
        Initially, create a basic discount calculator for regular customers.
        Later, you need to extend the system for premium and VIP customers without modifying the existing code.

    Task:
        Design your system to follow the Open/Closed Principle (OCP)
*/

interface DiscountCalculator {
    calculateDiscount(amount: number): number;
}

class RegularCustomer implements DiscountCalculator {
    calculateDiscount(amount: number): number {
        return amount;
    }
}

class PremiumCustomer implements DiscountCalculator {
    calculateDiscount(amount: number): number {
        const finalAmount = amount - amount * 0.1;
        return finalAmount;
    }
}

class VIPCustomer implements DiscountCalculator {
    calculateDiscount(amount: number): number {
        const finalAmount = amount - amount * 0.2;
        return finalAmount;
    }
}

const amount = 100;

const regularCustomer = new RegularCustomer();
const premiumCustomer = new PremiumCustomer();
const vipCustomer = new VIPCustomer();

console.log(`Regular Customer Final Amount: ${regularCustomer.calculateDiscount(amount)}`);
console.log(`Premium Customer Final Amount: ${premiumCustomer.calculateDiscount(amount)}`);
console.log(`VIP Customer Final Amount: ${vipCustomer.calculateDiscount(amount)}`);