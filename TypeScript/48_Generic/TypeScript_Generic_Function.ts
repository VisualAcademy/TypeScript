namespace TGF {
    interface IEmail {
        name: string;
        emails: Array<string>;
    }
    function addSupportEmail<T extends IEmail>(contact: T): T {
        for (var i = 0; i < contact.emails.length; i++) {
            if (contact.emails[i] === "support@devlec.com") {
                return contact;
            }
        }
        contact.emails.push('support@devlec.com');
        return contact;
    }
    class Contact implements IEmail {
        emails: Array<string>; 
        constructor(public name: string, ...emails: Array<string>) {
            this.emails = emails;
        }
    }
    var c1 = new Contact("홍길동", "a@a.com", "b@b.com"); 
    var c2 = new Contact("백두산", 'c@c.com'); 
    var cust1 = addSupportEmail(c1);
    var cust2 = addSupportEmail(c2);
    console.log(cust1);
    console.log(cust2);
    class Employee implements IEmail {
        emails: Array<string>;
        constructor(public name: string, public age: number, ...emails: Array<string>) {
            this.emails = emails;
        }
    }
    var em1 = new Employee("임꺽정", 21, "d@d.com"); 
    var emp1 = addSupportEmail(em1); 
}
