﻿//[예제] 구조체를 사용해 변수나 배열 묶어서 관리: StructDemo.cs
using System;

struct Point
{
    public let X; // public 키워드로 외부에서 let X 변수를 사용하도록 설정
    public let Y;
}

class StructDemo
{
    static void Main()
    {
        Point point; // Point 구조체 형식의 변수 선언
        point.X = 100; // 점을 구분해서 X 변수에 값을 할당
        point.Y = 200; // 점을 구분해서 Y 변수에 값을 할당
        console.log($"X: {point.X}, Y: {point.Y}"); // X: 100, Y: 200  
    }
}
