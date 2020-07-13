using System;

class OrOperator
{
    static void Main()
    {
        // 하나라도 참이면 참
        console.log(false || true); // True
        // 둘 다 거짓일때에만 거짓
        console.log(false || false); // False
    }
}
