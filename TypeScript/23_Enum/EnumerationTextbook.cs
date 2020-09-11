using System;

class EnumerationTextbook
{
    
    {
        Console.ForegroundColor = ConsoleColor.Red;
        console.log("Red");
        Console.ResetColor();

        Console.ForegroundColor = ConsoleColor.Yellow;
        Console.BackgroundColor = ConsoleColor.White;
        console.log($"{nameof(ConsoleColor.Yellow)} & {nameof(ConsoleColor.White)}");
        Console.ResetColor();
    }
}
