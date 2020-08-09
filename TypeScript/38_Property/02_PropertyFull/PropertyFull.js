//[?] 전체 속성 사용하기 
var PropertyFull;
(function (PropertyFull) {
    var Person = /** @class */ (function () {
        function Person() {
        }
        Object.defineProperty(Person.prototype, "name", {
            // 속성
            get: function () {
                return this._name;
            },
            set: function (value) {
                this._name = value;
            },
            enumerable: true,
            configurable: true
        });
        return Person;
    }());
    var person = new Person();
    person.name = "VisualAcademy"; // set
    console.log(person.name); // get
})(PropertyFull || (PropertyFull = {}));
//# sourceMappingURL=PropertyFull.js.map