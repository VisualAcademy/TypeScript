// 곱셈 함수 만들기
using System;

class FunctionPractice
{
    
    {
        decimal result = 0;

        result = Multiply(3.14m, 10.0M);

        console.log($"{result:0.00}"); // 31.40
    }

    static decimal Multiply(decimal a, decimal b)
    {
        return a * b; 
    }
}
