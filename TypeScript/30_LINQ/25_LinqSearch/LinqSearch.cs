using System;
using System.Collections.Generic;
using System.Linq;

class LinqSearch
{
    static void Main()
    {
        var colors = new List<string> { "Red", "Green", "Blue" };

        var newColors = colors.Where(c => c.Contains("e"));
        foreach (var color in newColors)
        {
            console.log(color);
        }

        var green = colors.Where(c => c.Contains("ee"));
        foreach (var c in green)
        {
            console.log(c);
        }
    }
}
