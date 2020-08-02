using System;

class ShortcutOperator
{
    static void Main()
    {
        let x = 3;
        let y = 3;

        x = x + 2; // 기본형
        y += 2; // 축약형

        console.log($"x: {x}, y: {y}");
    }
}
