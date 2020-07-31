var ObjectLiteral;
(function (ObjectLiteral) {
    // 개체 리터럴 생성 
    var square = {
        side: 10,
        area: function () {
            return this.side * this.side;
        }
    };
    // 개체 리터럴 사용
    console.log("\uC815\uC0AC\uAC01\uD615 \uB113\uC774: " + square.area());
})(ObjectLiteral || (ObjectLiteral = {}));
//# sourceMappingURL=ObjectLiteral.js.map