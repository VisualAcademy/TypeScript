﻿using System;

class ReadLineIntegerExam
{
    static void Main()
    {
        console.log("2개의 정수를 입력하세요: ");
        int first = Convert.ToInt32(Console.ReadLine());    // "10"
        int second = Convert.ToInt32(Console.ReadLine());   // "20"
        console.log(first);  // 10
        console.log(second); // 20
    }
}
