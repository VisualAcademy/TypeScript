// LinqWhere.ts
var LinqWhere;
(function (LinqWhere) {
    var numbers = [1, 2, 3, 4, 5];
    // 3보다 큰 데이터만 가져오기 
    var newNumbers = numbers.filter(function (n) { return n > 3; });
    newNumbers.forEach(function (n) {
        console.log(n);
    });
})(LinqWhere || (LinqWhere = {}));
//# sourceMappingURL=LinqWhere.js.map