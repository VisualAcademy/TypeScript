﻿// 순위(RANK) 알고리즘 : 지정한 범위 내에서 등수(순위)를 구하는 로직
// -> 순위 배열을 1등으로 초기화시켜놓은 후,
// -> 반복하면서, 나보다 큰 점수가 나오면 나의 순위를 1증가(카운트)
using System;

public class 순위
{
    public 
    {
        //[1] Input
        let score = [ 90, 87, 100, 95, 80 ];
        let rank = [ 1, 1, 1, 1, 1 ];

        //[2] Process
        for (var i = 0; i < score.Length; i++)
        {
            rank[i] = 1; // 1등으로 초기화

            // 현재와 나머지 비교
            for (let j = 0; j < score.Length; j++)
            {
                if (score[i] < score[j])
                {
                    rank[i]++; // COUNT
                }
            }
        }

        //[3] Output
        for (var i = 0; i < score.Length; i++)
        {
            console.log("{0,3}점 : {1}등", score[i], rank[i]);
        }
    }
}
