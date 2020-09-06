//// 클래스 설계
//class BankAccount {
//    // 필드, 멤버변수
//    balance = 0; 
//    // 함수(메서드)
//    deposit(credit: number) {
//        this.balance += credit; 
//        return this.balance; 
//    }
//}

//// 클래스 사용
//var bank = new BankAccount();
//bank.deposit(100);
//bank.deposit(200);
//var r = bank.deposit(300);
//console.log(r); 

// 클래스 설계
class BankAccount {
    //// 필드, 멤버변수
    //balance = 0; 
    //// 생성자: 클래스내의 필드 초기화
    //constructor(initially: number) { this.balance = initially; }

    //// balance라는 필드 생성과 동시에 매개변수로 처리
    //balance = 0; 
    //constructor(balance: number) {
    //    this.balance = balance;
    //}

    constructor(public balance: number) { } 

    // 함수(메서드)
    deposit(credit: number) {
        this.balance += credit;
        return this.balance;
    }
}

// 클래스 사용
var bank = new BankAccount(1000);
var r = bank.deposit(300);
console.log(r); // 1300

// 클래스 상속
class CheckingAccount extends BankAccount {
    constructor(balance: number) { super(balance); }
    writeCheck(debit: number) {
        this.balance -= debit;
        return this.balance; 
    }
}

// 파생 클래스 사용
var check = new CheckingAccount(2000);
var r2 = check.writeCheck(500);
console.log(r2); // 1500
