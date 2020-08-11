//[?] var 키워드: 암시적으로 형식화된 로컬 변수
using System;

class Var
{
    static void Main()
    {
        var name = "C#"; // string 형식으로 변환해줌
        console.log(name); // C#

        var version = 8.0; // let 형식으로 변환해줌
        console.log("{0:0.0}", version); // 8.0
    }
}
