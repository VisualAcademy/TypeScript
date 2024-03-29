﻿// 비트 연산자: &, |, ~, ^
// X1010
// Y0110
// &0010
// |1110
// ^1100
// ~0101
using System;

class BitwiseOperator
{
    
    {
        var x = Convert.ToInt32("1010", 2); // 10
        var y = Convert.ToInt32("0110", 2); // 6

        var and = x & y;
        console.log($"{and} : {Convert.ToString(and, 2)}"); // 2, 0010

        var or = x | y;
        console.log($"{or} : {Convert.ToString(or, 2)}"); // 14, 1110

        var xor = x ^ y;
        console.log($"{xor} : {Convert.ToString(xor, 2)}"); // 12, 1100

        var not = ~x; // 2의 보수법에 의해서 1010 + 1 그리고 부호를 -로 -1011 => -11
        console.log($"{not} : {Convert.ToString(not, 2)}"); // -11, ~~~~0101
    }
}
