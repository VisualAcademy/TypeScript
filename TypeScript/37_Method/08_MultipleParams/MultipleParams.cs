using System;

class MultipleParams
{
    static void Multi(params string[] messages)
    {
        foreach (string message in messages)
        {
            Console.Write(message);
        }
        console.log();
    }

    static void Main()
    {
        Multi("A");
        Multi("A", "B");
        Multi("A", "B", "C");
    }
}
