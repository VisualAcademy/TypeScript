﻿//[?] 자동으로 구현된 속성 사용하기 
using System;

namespace AutomaticallyImplementedProperty
{
    // 자동차 속성: 이름, 색상, ...
    public class Car
    {
        //[1] 필드와 속성을 함께 사용하는 전체 속성
        // 필드
        private string name;

        // 속성(Property)
        public string Name
        {
            get
            {
                return name; // 필드를 외부에 공개
            }
            set
            {
                name = value; // 외부에서 전달된 값을 필드에 초기화
            }
        }

        //[2] 자동으로 구현된 속성으로 간단하게 생성
        public string Color { get; set; }
    }

    class AutomaticallyImplementedProperty
    {
        
        {
            Car c1 = new Car();
            c1.Name = "남보러가니"; // setter
            console.log(c1.Name); // getter

            Car c2 = new Car();
            c2.Name = "제네실수"; c2.Color = "Red";
            console.log("{0}, {1}", c2.Name, c2.Color);
        }
    }
}
