var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
    }
    return Student;
}());
var user = new Student("용준", "박");
console.log(user.fullName);
//# sourceMappingURL=Hello.js.map