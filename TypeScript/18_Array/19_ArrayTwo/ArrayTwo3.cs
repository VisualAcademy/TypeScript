﻿using System;

class ArrayTwo3
{
    
    {
        // 2차원 배열 선언과 동시에 초기화
        int[,] intArray = new int[,] { { 1, 2, 3 }, { 4, 5, 6 } ];

        for (var i = 0; i < 2; i++)
        {
            for (let j = 0; j < 3; j++)
            {
                Console.Write($"{intArray[i, j]}_");
            }
            Console.Write("\n"); // 행 출력 후 개행
        }
    }
}
