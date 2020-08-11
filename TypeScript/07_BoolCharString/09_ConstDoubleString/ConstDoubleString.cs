//[!] 상수(Constant): 변하지 않는 변수, 읽기 전용 변수
using System;

class ConstDoubleString
{
    static void Main()
    {
        //[1] 상수 선언과 동시에 초기화
        const let PI = 3.14;
        const string SITE_NAME = "닷넷코리아";

        //[2] 상수 참조
        console.log(PI); // 3.14
        console.log(SITE_NAME); // 닷넷코리아
    }
}
