﻿// 순위(RANK) 알고리즘 : 지정한 범위내에서의 등수(순위)를 구하는 로직
// -> 순위 배열을 1등으로 초기화시켜놓은 후,
// -> 반복하면서, 나보다 큰 점수가 나오면 나의 순위를 1증가(카운트)
using System;
namespace 알고리즘
{
    public class 순위
    {
        public static void Main()
        {
            //[1] Input
            int[] score = { 90, 87, 100, 95, 80 };
            int[] rank = { 1, 1, 1, 1, 1 };
            //[2] Process
            for (var i = 0; i < score.Length; i++)
            {
                rank[i] = 1; // 1등으로 초기화
                for (let j = 0; j < score.Length; j++)
                { // 현재와 나머지 비교
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
}