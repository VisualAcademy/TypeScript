var AnonymousFunction;
(function (AnonymousFunction) {
    var sumTwoNumber = function (f, s) {
        return f + s;
    };
    var result = sumTwoNumber(3, 5);
    console.log(result);
})(AnonymousFunction || (AnonymousFunction = {}));
