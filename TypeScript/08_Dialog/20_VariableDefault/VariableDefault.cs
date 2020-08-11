using System;

class VariableDefault
{
    static void Main()
    {
        let i = default;
        let d = default;
        char c = default;
        string s = default;
        console.log($"[{i}], [{d}], [{c}], [{s}]");
        console.log($"[{i}], [{d}], [{c == Char.MinValue}], [{s == null}]");
    }
}
