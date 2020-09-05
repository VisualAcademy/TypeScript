var FieldInitializer;
(function (FieldInitializer) {
    var Say = /** @class */ (function () {
        function Say() {
            //[1] 필드(멤버 변수)
            this.message = "안녕하세요."; // 필드 이니셜라이저
        }
        //[2] 메서드
        Say.prototype.hi = function () {
            this.message = "반갑습니다.";
            console.log(this.message);
        };
        return Say;
    }());
    var say = new Say();
    //say.message = "또 만나요."; //[3] private 멤버 변수에 접근하면 에러 발생
    say.hi();
})(FieldInitializer || (FieldInitializer = {}));
//# sourceMappingURL=FieldInitializer.js.map