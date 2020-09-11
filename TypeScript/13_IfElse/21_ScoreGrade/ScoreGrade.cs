﻿// if else 구문을 사용한 점수에 따른 학점 계산 프로그램
using System;

class ScoreGrade
{
    
    {
        let score = 0;
        char grade = 'F';

        console.log("당신의 점수는? ");
        score = Convert.ToInt32(Console.ReadLine());

        if (score >= 90)
        {
            grade = 'A';
        }
        else if (score >= 80)
        {
            grade = 'B';
        }
        else if (score >= 70)
        {
            grade = 'C';
        }
        else if (score >= 60)
        {
            grade = 'D';
        }
        else
        {
            grade = 'F';
        }

        console.log($"점수: {score}점");
        console.log($"학점: {grade}학점");
    }
}
