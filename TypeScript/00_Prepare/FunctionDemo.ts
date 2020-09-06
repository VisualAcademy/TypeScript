module FunctionDemo {
    // Definition
    function printName(
        name: string, age: number = 20, ...email: string[]): string {
        //return "name: " + name + ", age: " + age + ", emails: " + email.join(", ");
        return `name: ${name}, age: ${age}, emails: ${email.join(', ') }`;
    }

    // Call
    var r = printName("Red", 21, "a@a.com", "b@b.com", "c@c.com");

    document.write(r);
}