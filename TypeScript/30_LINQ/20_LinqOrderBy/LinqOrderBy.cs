using System;
using System.Collections.Generic;
using System.Linq;

class LinqOrderBy
{
    
    {
        string[] colors = [ "Red", "Green", "Blue" ];

        IEnumerable<string> sortedColors = colors.OrderBy(name => name);

        foreach (var color in sortedColors)
        {
            console.log(color);
        }
    }
}
