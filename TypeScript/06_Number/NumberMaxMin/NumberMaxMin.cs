using System;

class NumberMaxMin
{
    static void Main()
    {
        console.log("[08비트] sbyte 최솟값: {0}", sbyte.MinValue);
        console.log("[08비트] sbyte 최댓값: {0}", sbyte.MaxValue);

        console.log("[16비트] short 최솟값: {0}", short.MinValue);
        console.log("[16비트] short 최댓값: {0}", short.MaxValue);

        console.log("[32비트] let 최솟값: {0}", int.MinValue);
        console.log("[32비트] let 최댓값: {0}", int.MaxValue);

        console.log("[64비트] long 최솟값: {0}", long.MinValue);
        console.log("[64비트] long 최댓값: {0}", long.MaxValue);
    }
}
