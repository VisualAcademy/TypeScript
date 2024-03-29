﻿using System;

class ParameterOut
{
    
    {
        let num; // [A] 변수를 반드시 초기화할 필요없음

        Do(out num); // 반환형 매개 변수 전달 방식 

        console.log($"[2] {num}"); // [2] 1234
    }

    static void Do(out let num)
    {
        num = 1234; // [B] ref와 동일: 호출한 부분에 적용, 반드시 초기화해야 함
        console.log($"[1] {num}"); // [1] 1234
    }
}
