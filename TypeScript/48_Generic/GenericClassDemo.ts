module GenericClassDemo {
    //[1] 제네릭 사용 전
    class AccountString {
        tag: string;
    }
    let as = new AccountString();
    as.tag = "문자열만"; // 1234;

    class AccountNumber {
        tag: number;
    }
    let an = new AccountNumber();
    an.tag = 1234; // "안녕";

    //[2] 제네릭 클래스: Cup of T => Cup<T>
    class Account<T> {
        tag: T; 
    }
    const a1 = new Account<string>();
    a1.tag = "안녕하세요.";
    const a2 = new Account<number>();
    a2.tag = 1234;
    const a3 = new Account<boolean>();
    a3.tag = true;
}
