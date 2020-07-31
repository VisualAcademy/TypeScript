var DefaultParameter;
(function (DefaultParameter) {
    function log(message, level) {
        if (level === void 0) { level = 1; }
        console.log(message + ", " + level);
    }
    log("디버그"); // 두 번째 매개변수 생략
    log("에러", 4); // 전체 매개변수 사용
})(DefaultParameter || (DefaultParameter = {}));
//# sourceMappingURL=DefaultParameter.js.map