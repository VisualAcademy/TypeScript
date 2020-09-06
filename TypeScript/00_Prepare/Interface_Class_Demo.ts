// Entity형 정의
interface IContact {
    name: string;
    age: number; 
    addr?: string; // Nullable: 옵션
};

var theContact = { name: "박용준", age: 21, addr: "서울" };
var theContact2 = { name: "홍길동", age: 20, addr: "부산" };

function printContact(contact: IContact): string {
    if (contact.addr) {
        return `이름: ${contact.name}, 나이: ${contact.age}, 주소: ${contact.addr}`;
    }
    else {
        return contact.name + ", " + contact.age;
    }
}

var contactResult = printContact(theContact);
//console.log(contactResult);
document.write(contactResult); 


// 함수형 정의
interface IPrintContact {
    (contact: IContact): string;
}

var contactPrinter: IPrintContact;
contactPrinter = function (contact: IContact): string {
    return contact.name + ", " + contact.age; 
}

// 배열형 정의
interface IContactArray {
    [index: number]: IContact;
}

var contactArray: IContactArray; 
contactArray = [theContact, theContact2];
document.write("<br />" + printContact(contactArray[1]));

// 클래스를 사용하여 묶어서 관리
interface IPrintCurrentContact {
    print(): string;
}
// 인터페이스를 구현한 클래스 선언
class Contact implements IContact, IPrintCurrentContact {
    name: string;
    age: number;
    print(): string {
        return this.name + ", " + this.age;
    }
    constructor(name: string, age: number) {
        this.name = name; 
        this.age = age; 
    }
}
//var contactTest = new Contact();
//contactTest.name = "백두산";
//contactTest.age = 100;
var contactTest = new Contact("백두산", 101);
document.write("<br />" + contactTest.print());

// 클래스 상속
class ContactWithAddr extends Contact {
    addr: string;
    constructor(name: string, age: number, addr: string) {
        super(name, age); 
        this.addr = addr; 
    }
    print(): string {
        return `${this.name}, ${this.age}, ${this.addr}`;
    }
}
var contactWithAddr = new ContactWithAddr("임꺽정", 41, "세종");
document.write("<br />" + contactWithAddr.print()); 
