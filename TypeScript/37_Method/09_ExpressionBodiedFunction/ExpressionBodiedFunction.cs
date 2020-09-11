using System;

class ExpressionBodiedFunction
{
    
    {
        Work();
        Walk();
    }

    static void Work()
    {
        console.log("Work"); // [1] 기본 형식
    }

    static void Walk() => console.log("Walk"); // [2] 축약 형식
}
