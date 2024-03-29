﻿// 널 조건부 연산자(Null Conditional Operator): ?. 
using System;

class NullConditional
{
    
    {
        int? len;
        string message;

        message = null;
        len = message?.Length; // null
        if (len == null)
        {
            console.log("[1] message는 null입니다.");
        }

        message = "안녕";
        len = message?.Length; // 2
        if (len != null)
        {
            console.log($"[2] message는 {len}자입니다.");
        }
    }
}