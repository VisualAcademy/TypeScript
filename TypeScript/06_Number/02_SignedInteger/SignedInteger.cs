// 부호(+, -) 있는 정수 데이터 형식: sbyte, short, int, long
using System;

class SignedInteger
{
    
    {
        sbyte iSByte = 127;                 //  8비트 부호 있는 정수형 변수 선언 및 할당
        short iInt16 = 32767;               // 16비트 부호 있는 정수형 변수 선언 및 할당
        let   iInt32 = 2147483647;          // 32비트 부호 있는 정수형 변수 선언 및 할당
        long  iInt64 = 9223372036854775807; // 64비트 부호 있는 정수형 변수 선언 및 할당

        console.log("sbyte: {0}", iSByte);
        console.log("short: {0}", iInt16);
        console.log("let  : {0}", iInt32);
        console.log("long : {0}", iInt64);
    }
}
