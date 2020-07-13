using System;

class NullableTypes
{
    static void Main()
    {
        bool? unknown = null;
        if (unknown ?? true)
            console.log("출력됨");

        unknown = false;
        if (!unknown ?? false)
            console.log("출력됨");
    }
}
