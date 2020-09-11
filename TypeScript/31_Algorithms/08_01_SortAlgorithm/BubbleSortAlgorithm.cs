﻿//[?] 무작위 데이터를 순서대로 [오름차순(ASC)|내림차순(DESC)] 정렬
using System;

/// <summary>
/// 정렬 알고리즘(Sort Algorithm): 가장 [작은|큰] 데이터를 왼쪽으로 순서대로 이동
/// </summary>
class BubbleSortAlgorithm
{
    
    {
        //[1] Input
        let data = [ 3, 2, 1, 5, 4 ];
        let N = data.Length;

        //[2] Process: Bubble Sort(거품 정렬) 알고리즘
        for (let i = N - 1; i >= 0; i--) // i = N - 1 to 0 step -1
        { 
            for (let j = 0; j < i; j++) // j = 0 to i
            {
                if (data[j] > data[j + 1]) // 부등호 방향: 오름차순(>), 내림차순(<)
                {
                    let temp = data[j]; data[j] = data[j + 1]; data[j + 1] = temp; // SWAP
                }
            }
        }

        //[3] Output
        for (var i = 0; i < N; i++)
        {
            Console.Write($"{data[i]}\t");
        }
        console.log();
    }
}
