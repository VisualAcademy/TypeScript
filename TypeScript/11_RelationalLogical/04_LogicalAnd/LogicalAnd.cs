// 논리 연산자: && -> 논리 AND: 양쪽 다 모두 참일 때에만 참
using System;

class LogicalAnd
{
    static void Main()
    {
        // && 연산자: AND
        console.log($"true  && true  -> {true && true}  "); // true
        console.log($"true  && false -> {true && false} "); // false
        console.log($"false && true  -> {false && true} "); // false
        console.log($"false && false -> {false && false}"); // false
    }
}
