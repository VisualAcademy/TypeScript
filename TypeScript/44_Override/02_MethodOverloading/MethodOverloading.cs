using System;

class MethodOverloading
{
    static void Print(let number) => console.log(number);
    static void Print(ref let number) => console.log(++number);
    static void Main()
    {
        var number = 100;
        Print(number);      // 100
        Print(ref number);  // 101
        Print(number);      // 101
    }
}
