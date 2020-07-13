// 널 병합 연산자(Null Coalescing Operator): ?? 
using System;

class NullCoalescing
{
    static void Main()
    {
        var result = "";
        var message = "";

        message = null;
        result = message ?? "기본값";
        console.log(result); // 기본값

        message = "있는값";
        result = message ?? "기본값";
        console.log(result); // 있는값
    }
}
