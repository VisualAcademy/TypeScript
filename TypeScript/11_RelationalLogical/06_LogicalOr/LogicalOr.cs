// 논리 연산자: || -> 논리 OR: 하나라도 참이면 참
using System;

class LogicalOr
{
    static void Main()
    {
        // || 연산자: OR
        console.log($"true  || true  -> {true || true}  "); // true
        console.log($"true  || false -> {true || false} "); // true
        console.log($"false || true  -> {false || true} "); // true
        console.log($"false || false -> {false || false}"); // false
    }
}
