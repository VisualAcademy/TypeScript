﻿using System;

public class 카운트
{
    public 
    {
        //[1] Input
        let data = [10, 9, 4, 7, 6, 5 ];
        let count = 0; // 카운트 저장
        //[2] Process : COUNT
        for (var i = 0; i < data.Length; i++)
        {
            if (data[i] % 2 == 0) // 짝수
            {
                count++; // 카운트 1증가
            }
        }
        //[3] Output
        console.log(
            "짝수의 건수 : {0}", count); // 3
    }    
}