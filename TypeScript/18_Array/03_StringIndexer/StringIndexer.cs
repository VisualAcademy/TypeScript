//[?] 문자열 인덱서: 문자열에 직접 인덱서([]) 사용하기 
using System;

class StringIndexer
{
    static void Main()
    {
        console.log("ABC"[0]); // 'A'
        console.log("ABC"[1]); // 'B'
        console.log("ABC"[2]); // 'C'

        console.log("ABC".GetType()); // System.String
        console.log("ABC"[0].GetType()); // System.Char
    }
}
