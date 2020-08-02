// 전위(Prefix) 증감 연산자: 우선순위가 높음
using System;

class PrefixOperator
{
    static void Main()
    {
        let i = 3;

        let j = ++i;

        console.log(j); // 4
    }
}
