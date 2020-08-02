// ?? 연산자(널 병합 연산자(Null Coalescing Operator))
var NullCoalescingNote;
(function (NullCoalescingNote) {
    var nullValue = null;
    var message = "";
    //[1] if 구문으로 null 값 비교
    nullValue = null;
    if (nullValue === null) {
        message = "[1] null이면 새로운 값으로 초기화합니다.";
    }
    console.log(message);
    //[2] ?? 연산자로 null 값 비교
    nullValue = null;
    message = nullValue !== null && nullValue !== void 0 ? nullValue : "[2] null이면 새로운 값으로 초기화합니다.";
    console.log(message);
})(NullCoalescingNote || (NullCoalescingNote = {}));
//# sourceMappingURL=NullCoalescingNote.js.map