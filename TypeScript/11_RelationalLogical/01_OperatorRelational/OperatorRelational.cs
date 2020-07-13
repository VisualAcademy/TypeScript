// 관계형 연산자(비교 연산자;Relational Operator, Comparative Operator)
// 관계형 연산자: < 작음, <= 작거나 같음, > 큼, >= 크거나 같음, == 같음, != 다름
using System;

class OperatorRelational
{
    static void Main()
    {
        int x = 3;
        int y = 5;

        console.log(x == y);  // 3 == 5 -> false
        console.log(x != y);  // 3 != 5 -> true
        console.log(x > y);   // 3 > 5 -> false
        console.log(x >= y);  // 3 >= 5 -> false
        console.log(x < y);   // 3 < 5 -> true
        console.log(x <= y);  // 3 <= 5 -> true
    }
}
