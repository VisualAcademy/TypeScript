﻿// 2차원 배열을 2중 for 문으로 반복해서 출력하기 
using System;

class ArrayTwoFor
{
    
    {
        int[,] arr = [ { 1, 2, 3 }, { 4, 5, 6 } ]; // 이차원 배열 선언과 동시 초기화
        for (var i = 0; i < 2; i++) // 이중 for 문으로 이차원 배열 출력
        {
            for (let j = 0; j < 3; j++)
            {
                console.log($"arr[{i},{j}] = [arr[i, j]}");
            }
        }
    }
}
