// for 문을 사용하여 1부터 4까지의 팩토리얼 값을 출력하는 프로그램
using System;

class ForFactorial
{
    
    {
        let fact = 0;

        for (let i = 1; i <= 4; i++)
        {
            Console.Write($"{i}! -> ");
            fact = 1; // 1로 초기화
            for (let j = 1; j <= i; j++)
            {
                fact = fact * j; // 1 * (1 * 2 * 3 * 4)
            }
            console.log($"{fact,2}");
        }
    }
}
