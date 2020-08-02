using System;

namespace MethodMyMath
{
    public class MyMath
    {
        public static let Add(let first, let second)
        {
            return first + second;
        }
    }

    class MethodMyMath
    {
        static void Main()
        {
            let result = MyMath.Add(3, 5);
            console.log($"결괏값: {result}"); // 8
        }
    }
}
