// 지역 변수와 전역 변수
var LocalAndGlobal;
(function (LocalAndGlobal) {
    var VariableScope = /** @class */ (function () {
        function VariableScope() {
            this.globalVariable = "[2] 전역 변수"; // 필드 또는 멤버 변수, 속성
        }
        VariableScope.prototype.render = function () {
            //[1] 지역 변수 사용
            var localVariable = "[1] 지역 변수";
            console.log(localVariable);
            //[2][1] 전역 변수 사용
            console.log(this.globalVariable);
            //[2][2] 전역 변수 사용
            this.test();
        };
        VariableScope.prototype.test = function () {
            console.log(this.globalVariable);
        };
        return VariableScope;
    }());
    var t = new VariableScope();
    t.render();
})(LocalAndGlobal || (LocalAndGlobal = {}));
//# sourceMappingURL=LocalAndGlobal.js.map