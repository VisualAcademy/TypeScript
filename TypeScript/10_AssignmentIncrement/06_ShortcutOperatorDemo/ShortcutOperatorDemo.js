// 할당(대입) 연산자: +=, -=, *=, /=, %=
var ShortcutOperatorDemo;
(function (ShortcutOperatorDemo) {
    var a = 3;
    var b = 5;
    b += a; // 누적: b변수에 a변수의 값을 누적
    console.log("" + b); // 8
    // 현재 b는 8
    b -= a; // 가감: b에서 a를 뺀 후 다시 b에 할당
    console.log("" + b); // 5
})(ShortcutOperatorDemo || (ShortcutOperatorDemo = {}));
//# sourceMappingURL=ShortcutOperatorDemo.js.map