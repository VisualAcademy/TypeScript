using System;

class ParameterIn
{
    static void Main()
    {
        int num = 10;
        console.log($"[1] {num}"); // [1] 10

        Do(num);

        console.log($"[3] {num}"); // [3] 10
    }

    static void Do(int num)
    {
        num = 20;
        console.log($"[2] {num}"); // [2] 20
    }
}
