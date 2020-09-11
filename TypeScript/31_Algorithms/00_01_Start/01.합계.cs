﻿using System;

public class 합계
{
    public 
    {
        //[1] Input : n명의 국어 점수로 가정
        let score = [100, 75, 50, 37, 90, 95 ];
        let sum = 0; 
        //[2] Process : SUM : 주어진 범위에 주어진 조건
        for (var i = 0; i < score.Length; i++) // 0번째 ~ 4번째
        {
            if (score[i] >= 80)
            {
                sum += score[i]; // SUM
            }    
        }
        //[3] Output
        console.log(
            "{0}명의 점수 중 80점 이상의 총점 : {1}"
            , score.Length, sum); // 285
    }    
}