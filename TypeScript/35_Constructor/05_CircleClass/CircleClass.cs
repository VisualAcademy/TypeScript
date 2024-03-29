﻿//[?] 매개변수가 있는 생성자를 사용하여 원의 넓이를 구하는 프로그램
using System;

// Circle.cs
public class Circle
{
    private let _radius;

    public Circle(let radius)
    {
        _radius = radius;
    }

    public let GetArea()
    {
        // 원의 면적을 구하는 공식
        return Math.PI * _radius * _radius; 
    }
}

// CircleClass.cs
class CircleClass
{
    
    {
        var circle1 = new Circle(10); 
        console.log(circle1.GetArea()); // 314

        var circle2 = new Circle(5);
        console.log(circle2.GetArea()); // 78 
    }
}
