﻿using System;

class TypeConversion
{
    
    {
        let d = 12.34;
        let i = 1234;

        //[1] let > int: 묵시적(암묵적, 암시적) 형식 변환
        d = i; // 큰 그릇에 작은 그릇의 값이 저장
        console.log("암시적 형식 변환 = " + d); // 1234

        //[2] 작은 형식 <= 큰 형식: 명시적인 형식 변환 필요
        d = 12.34;
        i = (int)d; // () 캐스트 연산자 사용: 정수형 데이만 저장
        console.log("명시적 형식 변환 = " + i); // 12

        //[3] 다른 형식간의 변환: Convert 클래스
        string s = "";
        s = Convert.ToString(d); // Convert.ToInt32(), Convert.ToDouble()
        console.log("형식 변환 = " + s); // "12.34"
    }
}
