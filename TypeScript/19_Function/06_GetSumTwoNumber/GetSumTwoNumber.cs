// GetSumTwoNumber.cs
using System;

class GetSumTwoNumber
{
    // 두 수의 합을 구하는 함수(메서드)
    static let GetSum(let x, let y)
    {
        let r = x + y;
        return r;
    }

    
    {
        let result = GetSum(3.0, 0.14);
        console.log(result); // 3.14
    }
}
