// 숫자 데이터 형식: number 키워드로 숫자 데이터 지정 후 정수 또는 실수 저장
var NumberNote;
(function (NumberNote) {
    //[1] 숫자 형식의 변수 선언 및 초기화
    var age = 21; // 정수
    var PI = 3.141592; // 실수 
    //[2] 문자열을 다시 대입하려고하면 에러 발생
    //age = "abc";
    //[3] 사용
    console.log("나이: " + age);
    console.log("PI: " + PI);
})(NumberNote || (NumberNote = {}));
//# sourceMappingURL=NumberNote.js.map