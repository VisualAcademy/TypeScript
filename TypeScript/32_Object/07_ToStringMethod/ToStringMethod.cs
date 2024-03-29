﻿using System;

namespace ToStringMethod
{
    class My { }

    class Your
    {
        //[!] ToString() 메서드를 다시 정의하여 새로운 문자열 출력
        public override string ToString()
        {
            return "새로운 반환 문자열 지정";
        }
    }

    class ToStringMethod
    {
        
        {
            My my = new My();
            console.log(my); // "My": 개체를 출력하면 기본은 클래스 이름이 출력

            Your your = new Your();
            console.log(your); // "새로운 반환 문자열 지정"
        }
    }
}
