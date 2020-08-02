//[?] sizeof 연산자로 데이터 형식의 크기 구하기
using System;

class SizeOf
{
    static void Main()
    {
        console.log("sizeof(데이터 형식)");
        console.log($"  char 형식: {sizeof(  char)} byte");      
        console.log($"   let 형식: {sizeof(   int)} byte");       
        console.log($"  long 형식: {sizeof(  long)} byte");      
        console.log($" float 형식: {sizeof( float)} byte");     
        console.log($"double 형식: {sizeof(double)} byte");    
    }
}
