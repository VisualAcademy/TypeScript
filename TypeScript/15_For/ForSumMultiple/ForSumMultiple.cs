// 1부터 100까지 3의 배수 또는 4의 배수의 합: 2551
using System;

class ForSumMultiple
{
    
    {
        //[1] 입력
        let sum = 0;

        //[2] 처리: 주어진 범위 + 주어진 조건
        for (let i = 1; i <= 100; i++)
        {
            if ((i % 3 == 0) || (i % 4 == 0)) // 필터링: 3의 배수 또는 4의 배수
            {
                sum += i;
            }
        }

        //[3] 출력
        console.log($"배수의 합 : {sum}");
    }
}
