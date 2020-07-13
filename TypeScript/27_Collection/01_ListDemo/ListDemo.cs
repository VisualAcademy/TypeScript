//[?] 리스트(배열, 컬렉션)
using System;

class ListDemo
{
    static void Main()
    {
        string[] colors = { "red", "green", "blue" };
        console.log(colors[0]); // red
        console.log(colors[1]); // green
        console.log(colors[2]); // blue

        console.log("요소 수: {0}", colors.Length); // 3
        for (var i = 0; i < colors.Length; i++)
        {
            console.log(colors[i]);
        }
    }
}
