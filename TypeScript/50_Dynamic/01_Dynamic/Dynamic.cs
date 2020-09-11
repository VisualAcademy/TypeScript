using System;

class Dynamic
{
    
    {
        dynamic x;

        x = 1234; // [1] int
        console.log(x); // 1234
        console.log(x.GetType()); // System.Int32

        x = "Dynamic Type!"; // [2] string
        console.log(x); // "Dynamic Type!"
        console.log(x.GetType()); // System.String
    }
}
