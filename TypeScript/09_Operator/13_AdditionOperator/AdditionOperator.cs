﻿//[?] 더하기(Addtion) 연산자의 추가적인 특징
using System;

class AdditionOperator
{
    
    {
        console.log("Hello" + "World"); // 문자열 더하기 
        console.log("Hi" + " " + "everyone");
        console.log("123" + "456"); // "123456" => 숫자형 문자열은 문자열로 취급
        console.log("123" + 456); // "123456" => 문자열과 숫자형은 문자열로 취급
        console.log(123 + "456"); // "123456"
        console.log(123 + 456); // 산술연산 => 숫자들끼리는 산술 연산
        console.log("123" + true); // 123True => bool 형식과의 더하기는 문자열 취급
        //console.log("123" - 456); // 에러: 문자열에서 정수를 뺄 수 없음
    }
}
