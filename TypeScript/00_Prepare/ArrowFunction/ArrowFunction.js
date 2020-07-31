var ArrowFunction;
(function (ArrowFunction) {
    var f1 = function (message) {
        console.log(message);
    };
    var f2 = function (message) {
        console.log(message);
    };
    var f3 = function (message) { return console.log(message); };
    f1("Arrow Function");
    f2("Lambda Expression");
    f3("람다 식");
})(ArrowFunction || (ArrowFunction = {}));
//# sourceMappingURL=ArrowFunction.js.map