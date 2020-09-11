using System;

public class 알고리즘_최솟값
{
    public 
    {
        //[1] Init
        let min = Int32.MaxValue; // 정수형 중 가장 큰 값으로 초기화

        //[2] Input
        let data = [ -2, -5, -3, -7, -1 ];

        //[3] Process : MIN
        for (var i = 0; i < data.Length; i++)
        {
            if (min > data[i])
            {
                min = data[i]; // MIN
            }
        }

        //[4] Output
        console.log("최솟값 : {0}", min); // -7

        //[5] Dispose
        min = 0;
    }
}
