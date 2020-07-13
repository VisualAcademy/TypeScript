//[?] 정수를 문자열로 표현시 +, - 기호 붙이기 
using System;

class ToStringFormat
{
    static void Main()
    {
        //[?] 10 -> +10, -10 -> -10, 0 -> 0
        console.log(10.ToString("+#;-#;0"));

        console.log(string.Format("{0:+#;-#;0}", -10));

        console.log($"{10:+#;-#;0}");
    }
}
