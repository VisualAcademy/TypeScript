using System;
using System.Collections;

class ArrayListNote
{
    
    {
        ArrayList list = new ArrayList();
        list.Add("C#");
        list.Add("TypeScript");

        for (var i = 0; i < list.Count; i++)
        {
            console.log(list[i].ToString());
        }
    }
}
