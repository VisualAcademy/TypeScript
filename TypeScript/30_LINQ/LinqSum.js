var LinqSum;
(function (LinqSum) {
    var numbers = [1, 2, 3];
    var sum = numbers.reduce(function (previousValue, currentValue) { return previousValue + currentValue; }, 0);
    console.log("numbers \uBC30\uC5F4 \uC694\uC18C\uC758 \uD569: " + sum);
})(LinqSum || (LinqSum = {}));
