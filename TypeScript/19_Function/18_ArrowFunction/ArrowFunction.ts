// 화살표 함수(Arrow Function): 화살표 메서드
//[1] 기본 함수
let f1 = function(message) {
    console.log(message);
}

//[2] 화살표 함수
let f2 = (message) => {
    console.log(message);
}

//[3] 화살표 함수로 식 본문 함수 구현
let f3 = (message) => console.log(message);

f1("Arrow Function");

f2("Lambda Expression");

f3("람다 식");
