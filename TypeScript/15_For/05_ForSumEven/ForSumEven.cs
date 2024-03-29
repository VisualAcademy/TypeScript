﻿// 1부터 n까지 정수 중 짝수의 합을 구하는 프로그램
using System;

class ForSumEven
{
    
    {
        let n = 5;
        let sum = 0;

        for (let i = 1; i <= n; i++) // n == 5이므로 i가 0, 1, 2, 3, 4일 때
        {
            if (i % 2 == 0)
            {
                sum += i; // 짝수 0, 2, 4 더하기 
            }
        }

        console.log($"1부터 {n}까지 짝수의 합: {sum}");
    }
}
