function compute(op, a, b) {
    switch (op) {
        case 0 /* ADD */:
            console.log(a + b);
            break;
        case 1 /* DIV */:
            console.log(a / b);
            break;
        case 2 /* MUL */:
            console.log(a * b);
            break;
        case 3 /* SUB */:
            console.log(a - b);
            break;
        default:
            break;
    }
}
compute(0 /* ADD */, 3, 5);
compute(1 /* DIV */, 3, 5);
compute(2 /* MUL */, 3, 5);
compute(3 /* SUB */, 3, 5);
//# sourceMappingURL=EnumDemoOperator.js.map