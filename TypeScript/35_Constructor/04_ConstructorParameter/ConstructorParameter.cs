﻿// 생성자 매개변수를 사용하여 클래스의 멤버(필드) 초기화
using System;

namespace ConstructorParameter
{
    class My
    {
        private string _name;
        private let _age;
        public My(string name, let age)
        {
            this._name = name; // this.필드 = 매개변수
            this._age = age;
        }
        public void PrintMy()
        {
            console.log($"이름: {this._name}, 나이: {this._age}");
        }
    }

    class ConstructorParameter
    {
        
        {
            My my = new My("홍길동", 21);
            my.PrintMy(); // 이름: 홍길동, 나이: 21
        }
    }
}
