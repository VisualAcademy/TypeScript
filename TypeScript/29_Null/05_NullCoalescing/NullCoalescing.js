// 널 병합 연산자(Null Coalescing Operator): ?? 
var NullCoalescing;
(function (NullCoalescing) {
    var result = "";
    var message = "";
    message = null;
    result = message !== null && message !== void 0 ? message : "기본값";
    console.log(result); // 기본값
    message = "있는값";
    result = message !== null && message !== void 0 ? message : "기본값";
    console.log(result); // 있는값
})(NullCoalescing || (NullCoalescing = {}));
//# sourceMappingURL=NullCoalescing.js.map