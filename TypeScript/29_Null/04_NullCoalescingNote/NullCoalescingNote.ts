﻿// ?? 연산자(널 병합 연산자(Null Coalescing Operator))
namespace NullCoalescingNote {
    let nullValue = null;
    let message = "";

    //[1] if 구문으로 null 값 비교
    nullValue = null;
    if (nullValue === null) {
        message = "[1] null이면 새로운 값으로 초기화합니다.";
    }
    console.log(message);

    //[2] ?? 연산자로 null 값 비교
    nullValue = null;
    message = nullValue ?? "[2] null이면 새로운 값으로 초기화합니다.";
    console.log(message);
}
