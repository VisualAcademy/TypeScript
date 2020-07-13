using System;

class GuidDemo
{
    static void Main()
    {
        string unique = Guid.NewGuid().ToString();
        console.log($"유일한 값: {unique}");

        console.log($"유일한 값: {Guid.NewGuid().ToString("D")}");
    }
}
