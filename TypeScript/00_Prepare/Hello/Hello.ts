class Student {
    fullName: string;
    constructor(public firstName, public lastName) {
        this.fullName = firstName + " " + lastName;
    }
}

var user = new Student("용준", "박");

console.log(user.fullName);
