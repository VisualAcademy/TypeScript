//[?] 선택적 매개 변수와 명명된 매개 변수
using System;

class OptionalParameter
{
    static void Main()
    {
        console.log(Sum(3, 5)); // [1] 3 + 5

        //[A] 선택적 매개 변수(Optional Parameter)
        console.log(Sum()); // [2] 10 + 20
        console.log(Sum(40)); // [3] 40 + 20
        console.log(Sum(100, 200)); // [4] 100 + 200

        //[B] 명명된 매개 변수(Named Parameter)
        console.log(Sum(first: 5, second: 4)); // [5] 5 + 4
        console.log(Sum(second: 3, first: 2)); // [6] 2 + 3
        console.log(Sum(second: 50)); // [7] 10 + 50
    }

    static int Sum(int first = 10, int second = 20)
    {
        return first + second;
    }
}
