var x: any;

x = 1234;
x = "안녕하세요.";

var y: string | number;

y = 1234;
y = "반갑습니다.";
// y = true; // 에러발생

interface A {
    a: string;
    b: number;
}

interface B {
    a: number;
    b: number;
    c: number;
}

var xx: A | B;

var objA = xx.a; // string | number
objA = 1234;
objA = "안녕하세요.";
