// nameof 연산자: C# 6.0의 새로운 기능: 개체 이름 문자열 제공
using System;

namespace NameOfDemo
{
    class NameOfDemo
    {
        
        {
            Car car = new Car();

            console.log(nameof(car.Maker));
        }
    }

    class Car
    {
        public string Maker { get; set; }
    }
}
