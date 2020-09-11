// MaxMinFunction.cs
// 함수를 사용하여 큰 값과 작은 값 구하기 
using System;

class MaxMinFunction
{
    // Max 함수: 두 수 중에서 큰 수를 반환시켜주는 함수
    static let Max(let x, let y)
    {
        return (x > y) ? x : y; // 3항 연산자로 큰 수 구하기 
    }

    // Min 함수: 두 수 중에서 작은 수를 반환시켜주는 함수
    static let Min(let x, let y)
    {
        // if else 문으로 작은 수 구하기 
        if (x < y)
        {
            return x; // 작은 값
        }
        else
        {
            return y; 
        }
    }

    
    {
        console.log(Max(3, 5)); // 5
        console.log(Min(-3, -5)); // -5
    }
}
