// Rest Parameter: 가변 길이 매개변수
var ParamsDemo;
(function (ParamsDemo) {
    function sumAll() {
        var numbers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            numbers[_i] = arguments[_i];
        }
        var sum = 0;
        for (var i_1 = 0; i_1 < numbers.length; i_1++) {
            sum += numbers[i_1];
        }
        return sum;
    }
    console.log(sumAll(3, 5)); // 8
    console.log(sumAll(3, 5, 7)); // 15
    console.log(sumAll(3, 5, 7, 9)); // 24
})(ParamsDemo || (ParamsDemo = {}));
//# sourceMappingURL=ParamsDemo.js.map