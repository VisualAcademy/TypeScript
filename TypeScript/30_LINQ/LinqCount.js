var LinqCount;
(function (LinqCount) {
    var numbers = [1, 2, 3];
    var count = numbers.filter(function (x) { return x; }).length;
    console.log(Object.keys(numbers)[0] + " \uBC30\uC5F4 \uC804\uCCB4 \uAC1C\uC218: " + count);
    var evenCount = numbers.filter(function (x) { return x % 2 == 0; }).length;
    console.log(numbers + " \uBC30\uC5F4 \uC9DD\uC218 \uAC1C\uC218: " + evenCount);
})(LinqCount || (LinqCount = {}));
