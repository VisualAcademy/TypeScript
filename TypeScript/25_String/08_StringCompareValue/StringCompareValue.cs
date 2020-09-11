//[?] 문자열 값 비교: 대소문자 비교 
using System;

class StringCompareValue
{
    
    {
        string s1 = "Gilbut";
        string s2 = "gilbut";

        //[1] 문자열의 값의 대소문자를 구분
        if (s1 == s2)
        {
            console.log("같다.");
        }
        else
        {
            console.log("다르다."); // "다르다." 출력됨
        }

        //[2] 문자열의 대소문자를 구분하지 않고 비교 
        if (s1.Equals(s2, StringComparison.OrdinalIgnoreCase))
        {
            console.log("같다."); // "같다." 출력됨
        }
    }
}
