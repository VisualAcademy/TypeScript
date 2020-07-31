// 형식 변환
var TypeConversionDemo;
(function (TypeConversionDemo) {
    var s = "12.34";
    var n1 = parseInt(s); // parseFloat()
    console.log("n1 => " + n1 + ": " + typeof n1);
    var n2 = +s; // + 연산자로 number 형식으로 변환
    console.log("n2 => " + n2 + ": " + typeof n2);
})(TypeConversionDemo || (TypeConversionDemo = {}));
//# sourceMappingURL=TypeConversionDemo.js.map