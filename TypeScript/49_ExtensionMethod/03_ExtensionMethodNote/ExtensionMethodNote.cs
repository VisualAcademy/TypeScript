using System;

public class Original { /* Empty */ }

public static class OriginalExtension
{
    public static void NewMethod(this Original original) 
        => console.log("새로운 메서드 추가");
}

class ExtensionMethodNote
{
    
    {
        (new Original()).NewMethod(); // 확장 메서드 호출 
    }
}
