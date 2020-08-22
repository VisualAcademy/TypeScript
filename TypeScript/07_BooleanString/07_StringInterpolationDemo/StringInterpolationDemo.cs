// String Interpolation(문자열 보간법)
using System;

class StringInterpolationDemo
{
    static void Main()
    {
        string name = "C#";
        string version = "8.0";

        //[1] WriteLine() 메서드의 기본 제공 기능 사용
        console.log("{0} {1}", name, version);

        //[2] String.Format() 메서드 사용
        string result = String.Format("{0} {1}", name, version);
        console.log(result);

        //[3] 문자열 보간법(String Interpolation) 사용
        console.log($"{name} {version}");

        // C# Interactive에서는 console.log() 생략 가능
        // $"{name} {version}"
    }
}
