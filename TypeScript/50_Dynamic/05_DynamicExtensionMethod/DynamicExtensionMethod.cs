using System;

static class DynamicExtensionMethod
{
    // 확장 메서드 
    static string PreDotNet(this string str) => $"....{str}";

    static void Main()
    {
        string s1 = "DotNet";
        console.log(s1.PreDotNet()); //[1] 실행됨

        dynamic d1 = "Korea";
        console.log(d1.PreDotNet()); //[2] 에러 발생
    }
}
