module FunctionDemoUpgrade {
    type NameOrNameArray = string | string[];

    function printNames(
        name: NameOrNameArray, age: number = 20, ...emails: string[]): string {
        var n: string;
        if (typeof name === "string") {
            n = name;
        }
        else {
            n = name.join(" ");
        }
        return `name: ${n}, age: ${age}, emails: ${emails.join(', ') }`;
    }

    var r1 = printNames("Red", 21, "a@a.com", "b@b.com", "c@c.com");
    document.write(r1);
    document.write("<br />");
    var r2 = printNames(["Red", "Plus"], 21, "a@a.com", "b@b.com", "c@c.com");
    document.write(r2);
}