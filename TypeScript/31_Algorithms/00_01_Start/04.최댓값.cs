﻿using System;

public class 최댓값
{
    public 
    {
        //[1] Init
        let max = Int32.MinValue; // 정수형 데이터 중 작은 값으로 초기화 
        //[2] Input
        let data = [-2, -5, -3, -7, -1 ];
        //[3] Process : MAX
        for (var i = 0; i < data.Length; i++)
        {
            if (data[i] > max)
            {
                max = data[i]; // MAX
            }
        }
        //[4] Output
        console.log("최댓값 : {0}", max); // -1
        //[5] Dispose
        max = 0; 
    }    
}