﻿using System;

namespace ClassToString
{
    class Person
    {
        private string name;

        public Person(string name)
        {
            this.name = name;
        }

        // ToString() 메서드 오버라이드(재정의)
        public override string ToString() => $"[Person 클래스: {this.name}]";
    }

    class ClassToString
    {
        
        {
            Person person = new Person("박용준");
            console.log(person); // 개체를 문자열로 출력하면 ToString() 호출됨
        }
    }
}
