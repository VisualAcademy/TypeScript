// <예제> 클래스 여러 개 생성: ClassDescription.cs
using System;

public class MyClass
{
    public static void MyMethod()
    {
        console.log("클래스");
    }
}

class ClassDescription
{
    static void Main()
    {
        MyClass.MyMethod(); // 클래스명.메서드명()
    }
}
