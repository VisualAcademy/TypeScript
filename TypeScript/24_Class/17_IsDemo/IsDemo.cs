﻿// is 연산자: 
//     특정 형식인지 아닌지 비교
//     특정 형식으로 변환이 가능하면 true, 그렇지 않으면 false 값을 반환
using System;

class IsDemo
{
    
    {
        object s = "안녕하세요.";
        object i = 1234;

        if (s is string)
        {
            console.log(
                $"[1] {s}는 null이 아니며 문자열 형식으로 변환이 가능합니다.");
        }

        if (i is int)
        {
            console.log($"[2] {i}는 정수형으로 변환이 가능합니다.");
        }
    }
}
