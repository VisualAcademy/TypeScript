namespace AnonymousFunction {
    //[1] 익명 함수(Anonymous Function) 선언
    const sumTwoNumber = function (f, s) {
        return f + s;
    }

    //[2] 익명 함수 사용
    let result = sumTwoNumber(3, 5);
    console.log(result);
}
