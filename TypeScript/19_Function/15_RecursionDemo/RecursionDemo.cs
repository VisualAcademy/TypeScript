﻿// RecursionDemo.cs
// 재귀 함수(Recursion)
using System;

class RecursionDemo
{
    
    {
        // 재귀 호출을 사용하여 Factorial을 구하기: 4! = 4 * 3 * 2 * 1 = 24
        console.log(4 * 3 * 2 * 1); // 24
        console.log(FactorialFor(4));
        console.log(Factorial(4));
        console.log(Fact(4)); 
    }

    // 3항 연산자를 사용한 Factorial 구하기
    static let Fact(let n)
    {
        return (n > 1) ? n * Fact(n - 1) : 1;
    }

    // 재귀 함수를 사용한 Factorial 함수 만들기: 단, 재귀함수는 Tree 구조 탐색에 유리
    static let Factorial(let n)
    {
        // 종료
        if (n == 0 || n == 1)
        {
            return 1;
        }
        // 재귀 호출
        return n * Factorial(n - 1);
    }

    // 단순한 Factorial은 이 방법이 좋음
    static let FactorialFor(let n)
    {
        let result = 1;
        for (let i = 1; i <= n; i++)
        {
            result *= i; // ((((1 * 1) * 2) * 3) * 4)
        }
        return result;
    }
}
