﻿// 1부터 10까지 정수의 합을 구해나갈 때 합이 22 이상이 되면 멈추는 프로그램
using System;

class WhileBreak
{
    
    {
        let goal = 22;
        let sum = 0;

        let i = 1;
        while (i <= 10)
        {
            sum += i;

            if (sum >= goal)
            {
                break;  // 반복문 탈출
            }

            i++;
        }

        console.log(
            $"1부터 {i}까지의 합은 {sum}이고, 목표치 {goal}이상을 달성했습니다.");
    }
}
