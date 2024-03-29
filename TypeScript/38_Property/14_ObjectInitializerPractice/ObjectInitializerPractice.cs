﻿using System;

namespace ObjectInitializerPractice
{
    //[1] Person 클래스 선언
    class Person
    {
        public string Name { get; set; }
        public string City { get; set; }
    }

    class ObjectInitializerPractice
    {
        
        {
            //[2] 개체 이니셜라이저로 개체의 속성 초기화하기 
            Person person = new Person { Name = "C#", City = "Seoul" ];
            console.log($"{person.Name} : {person.City}"); // C# : Seoul
        }
    }
}
