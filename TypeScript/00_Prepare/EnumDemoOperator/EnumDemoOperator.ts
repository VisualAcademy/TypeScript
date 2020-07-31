const enum Operator {
    ADD,
    DIV,
    MUL,
    SUB
}

function compute(op: Operator, a: number, b: number) {
    switch (op) {
        case Operator.ADD:
            console.log(a + b);
            break;
        case Operator.DIV:
            console.log(a / b);
            break;
        case Operator.MUL:
            console.log(a * b);
            break;
        case Operator.SUB:
            console.log(a - b);
            break;
        default:
            break;
    }
}

compute(Operator.ADD, 3, 5);
compute(Operator.DIV, 3, 5);
compute(Operator.MUL, 3, 5);
compute(Operator.SUB, 3, 5);
