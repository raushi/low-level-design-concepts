/*
✅ Concept: Interpreter Pattern
    The Interpreter Pattern defines a grammar for a language 
    and an interpreter that uses this grammar to interpret sentences in the language.

☕ Real-world analogy:
    Imagine you have a simple language like "1 + 2" or "5 - 3".
    The interpreter pattern allows you to represent this grammar and evaluate expressions using objects.
*/

interface Expression {
    interpret(): number;
}

class NumberExpression implements Expression {
    private number: number;

    constructor(number: number) {
        this.number = number;
    }

    interpret(): number {
        return this.number;
    }
}


class AddExpression implements Expression {
    private left: Expression;
    private right: Expression;

    constructor(left: Expression, right: Expression) {
        this.left = left;
        this.right = right;
    }

    interpret(): number {
        return this.left.interpret() + this.right.interpret();
    }

}


class SubtractExpression implements Expression {
    private left: Expression;
    private right: Expression;

    constructor(left: Expression, right: Expression) {
        this.left = left;
        this.right = right;
    }

    interpret(): number {
        return this.left.interpret() - this.right.interpret();
    }
}

const expr1 = new NumberExpression(5);
const expr2 = new NumberExpression(3);
const expr3 = new NumberExpression(2);

const addExpr = new AddExpression(expr1, expr2);
const subtractExpr = new SubtractExpression(addExpr, expr3);


console.log("Result:", subtractExpr.interpret());