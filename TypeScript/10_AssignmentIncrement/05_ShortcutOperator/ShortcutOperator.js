// 대입 연산자 축약형 사용하기
var ShortcutOperator;
(function (ShortcutOperator) {
    var x = 3;
    var y = 3;
    x = x + 2; // 기본형
    y += 2; // 축약형
    console.log("x: " + x + ", y: " + y);
})(ShortcutOperator || (ShortcutOperator = {}));
//# sourceMappingURL=ShortcutOperator.js.map