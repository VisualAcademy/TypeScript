﻿//[?] 람다식: 매개 변수도 있고 반환값도 있는 경우
using System;

class LambdaExpressionArgs
{
    //[1] 매개 변수도 있고 반환값도 있는 대리자 선언
    delegate let Lambda(let i);
    
    {
        //[2] 람다 식으로 대리자 개체 생성
        Lambda square = x => x * x; 
        console.log(square(3)); // 9
        console.log(square(4)); // 16
    }
}
