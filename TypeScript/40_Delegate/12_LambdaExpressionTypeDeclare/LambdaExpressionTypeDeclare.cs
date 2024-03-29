﻿using System;

class LambdaExpressionTypeDeclare
{
    delegate bool Lambda(string msg, let len);
    
    {
        // 람다 식에 형식 선언
        Lambda isLong = (string msg, let len) => msg.Length > len;
        console.log(isLong("안녕하세요.", 5)); // true
        console.log(isLong("반갑습니다.", 10)); // false
    }
}
