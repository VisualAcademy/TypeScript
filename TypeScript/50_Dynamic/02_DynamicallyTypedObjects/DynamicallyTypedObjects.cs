﻿//[?] dynamic 키워드로 선언된 변수는 런타임 시점에 데이터 형식이 결정된다. 
using System; 

class DynamicallyTypedObjects
{
    
    {
        dynamic x = 1; // 컴파일 시 dynamic, 런타임 시 System.Int32
        dynamic y = "Hello"; // 컴파일 시점에는 dynamic, 런타임 시점에는 System.String 

        console.log($"x: {x}, {x.GetType()}"); 
        console.log($"y: {y}, {y.GetType()}");
    }
}
