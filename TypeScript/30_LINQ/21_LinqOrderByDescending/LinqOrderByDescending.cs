using System;
using System.Collections.Generic;
using System.Linq;

class LinqOrderByDescending
{
    
    {
        var colors = new List<string> { "Red", "Blue", "Green" ];

        var sortedColors = colors.OrderByDescending(c => c);

        foreach (var color in sortedColors)
        {
            console.log(color);
        }
    }
}
