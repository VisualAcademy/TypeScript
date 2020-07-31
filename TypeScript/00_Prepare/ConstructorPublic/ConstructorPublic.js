var ConstructorPublic;
(function (ConstructorPublic) {
    var nameCard = /** @class */ (function () {
        function nameCard(name) {
            this.name = name;
            // Empty
        }
        nameCard.prototype.display = function () {
            console.log("\uC774\uB984: " + this.name);
        };
        return nameCard;
    }());
    var my = new nameCard("빌게이츠");
    my.name = "앤더스 헤일스버그"; // name 속성 변경
    my.display();
})(ConstructorPublic || (ConstructorPublic = {}));
//# sourceMappingURL=ConstructorPublic.js.map