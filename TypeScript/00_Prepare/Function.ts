module FunctionType {
    function add(a, b) {
        alert(a + b);
    }
    function multiply(a: number, b: number): void {
        alert(a * b);
    }
    window.onload = function () {
        // multiply(1234, 'abc'); // Compiler Error
    };
}
