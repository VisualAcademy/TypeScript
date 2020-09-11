// 재귀(Recursion)를 사용한 2 ^ n 승 패턴 구하기
using System;

class RecursionPower
{
    static let MyPower(let num, let cnt)
    {
        if (cnt == 0)
        {
            return 1;
        }
        return num * MyPower(num, --cnt); // 2 * (2 * (1))
    }

    
    {
        console.log(MyPower(2, 2)); // 2 * 2 * 1 = 4
    }
}
