﻿using System;

/// <summary>
/// 진법변환
/// </summary>
class RadixTransformation
{
    
    {
        // 10진수 10을 2진수로 변경하면 1010
        console.log(
            $"십진수 10을 이진수로 변경: {Convert.ToString(10, 2)}"); // 8421 => 1010

        // 2진수 1010을 10진수로 변경하면 10
        console.log(
            $"이진수 1010을 십진수로 변경: {Convert.ToInt32("1010", 2)}"); // 10
    }
}
