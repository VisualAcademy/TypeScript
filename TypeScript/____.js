var InterfacePractice;
(function (InterfacePractice) {
    //[2] 인터페이스를 상속하는 클래스 구현 
    var Repository = /** @class */ (function () {
        function Repository() {
        }
        Repository.prototype.get = function () {
            console.log("get() 메서드를 구현해야 합니다.");
        };
        return Repository;
    }());
    //[3] 상수에 인스턴스 담기 
    var repository = new Repository();
    repository.get();
})(InterfacePractice || (InterfacePractice = {}));
//# sourceMappingURL=____.js.map