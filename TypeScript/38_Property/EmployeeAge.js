var EmployeeAge;
(function (EmployeeAge) {
    var Employee = /** @class */ (function () {
        function Employee() {
        }
        Object.defineProperty(Employee.prototype, "age", {
            // age 속성
            get: function () {
                return this._age;
            },
            set: function (value) {
                if (value > 0 && value < 150) {
                    this._age = value;
                }
                else {
                    throw "나이 값이 잘못되었습니다.";
                }
            },
            enumerable: false,
            configurable: true
        });
        return Employee;
    }());
    var emp = new Employee();
    emp.age = 21;
    console.log(emp.age);
})(EmployeeAge || (EmployeeAge = {}));
//# sourceMappingURL=EmployeeAge.js.map