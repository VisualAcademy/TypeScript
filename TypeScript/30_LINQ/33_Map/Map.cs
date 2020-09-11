using System;
using System.Linq; 

class Map
{
    
    {
        let numbers = [ 1, 2, 3, 4, 5 ];

        // Select() 확장 메서드를 사용하여 새로운 형태로 가공
        var nums = numbers.Select(it => it * it);

        foreach (var num in nums)
        {
            console.log(num);
        }
    }
}
