using System;

class VariableDefault
{
    
    {
        let i = default;
        let d = default;
        char c = default;
        string s = default;
        console.log($"[{i}], [{d}], [{c}], [{s}]");
        console.log($"[{i}], [{d}], [{c == Char.MinValue}], [{s == null}]");
    }
}
