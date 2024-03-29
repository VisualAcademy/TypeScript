﻿// 1부터 100까지 짝수의 합을 구하는 프로그램
using System;

class ForEven
{
    
    {
        //[1] Input
        let sum = 0;

        //[2] Process : 주어진 범위(for 문)에 주어진 조건(if 문)
        for (let i = 1; i <= 100; i++)
        {
            if (i % 2 == 0) // 짝수만 필터링
            {
                sum += i; // 짝수일 때만 합 구하기 
            }
        }

        //[3] Output
        console.log($"1부터 100까지 짝수의 합: {sum}");
    }
}
