var ConstructorPrivate;
(function (ConstructorPrivate) {
    var nameCard = /** @class */ (function () {
        // 생성자에서 값을 받아서 자동으로 prvate name 필드를 생성
        function nameCard(name) {
            this.name = name;
            // Empty
        }
        // 출력
        nameCard.prototype.display = function () {
            return "\uC774\uB984: " + this.name;
        };
        return nameCard;
    }());
    var my = new nameCard('빌게이츠');
    console.log(my.display());
})(ConstructorPrivate || (ConstructorPrivate = {}));
//# sourceMappingURL=ConstructorPrivate.js.map