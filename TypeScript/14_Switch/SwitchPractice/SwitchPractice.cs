﻿using System;

class SwitchPractice
{
    static void Main()
    {
        int f = Convert.ToInt32(Console.ReadLine()); // 3
        char o = Convert.ToChar(Console.ReadLine()); // +, -, *
        int s = Convert.ToInt32(Console.ReadLine()); // 5

        switch (o)
        {
            case '+':
                console.log($"{f} {o} {s} = {f + s}");
                break;
            case '-':
                console.log($"{f} {o} {s} = {f - s}");
                break;
            case '*':
                console.log($"{f} {o} {s} = {f * s}");
                break;
            default:
                console.log("+, -, *만 사용하세요.");
                break;
        }
    }
}
