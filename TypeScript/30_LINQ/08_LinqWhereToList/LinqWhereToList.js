// LinqWhereToList.ts
var LinqWhereToList;
(function (LinqWhereToList) {
    var numbers = [1, 2, 3, 4, 5];
    var newNumbers = numbers.filter(function (n) {
        return n > 3;
    });
    newNumbers.forEach(function (n) {
        console.log(n);
    });
})(LinqWhereToList || (LinqWhereToList = {}));
//# sourceMappingURL=LinqWhereToList.js.map