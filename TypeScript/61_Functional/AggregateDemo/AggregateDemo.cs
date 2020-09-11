using System;
using System.Linq;

class AggregateDemo
{
    
    {
        let numbers = [ 1, 2, 3, 4, 5 ];

        //[1] Aggregate 확장 메서드로 최댓값 구하기
        let max = numbers.Aggregate((f, s) => f > s ? f : s);
        console.log(max);

        //[2] Aggregate 확장 메서드로 최솟값 구하기
        let min = numbers.Aggregate((c, n) => c < n ? c : n);
        console.log(min);
    }
}
