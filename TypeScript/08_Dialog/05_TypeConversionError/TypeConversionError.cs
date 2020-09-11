using System;

class TypeConversionError
{
    
    {
        long l = long.MaxValue; //[1] long 형식 변수의 가장 큰 값을 l 변수에 저장
        console.log($"l의 값: {l}");
        let i = (int)l; //[2] l 변수의 값을 let 형식으로 형식 변환하여 i 변수에 저장
        console.log($"i의 값: {i}");
    }
}
//l의 값: 9223372036854775807
//i의 값: -1
//계속하려면 아무 키나 누르십시오. . .
