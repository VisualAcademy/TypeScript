var InterfaceExam;
(function (InterfaceExam) {
    // 클래스
    var Person = /** @class */ (function () {
        function Person() {
            this.work = function () { return console.log("일을 합니다."); };
        }
        return Person;
    }());
    // 테스트
    var person = new Person();
    person.work();
})(InterfaceExam || (InterfaceExam = {}));
//# sourceMappingURL=InterfaceExam.js.map