using System;
using System.Linq;

class LinqAggregate
{
    
    {
        //[1] Aggregate 확장 메서드로 최댓값 구하기
        let numbers = [ 1, 2, 3, 4, 5 ];
        let max = numbers.Aggregate((f, s) => f > s ? f : s);
        console.log(max);

        //[2] Aggregate 확장 메서드로 최솟값 구하기
        let min = numbers.Aggregate((c, n) => c < n ? c : n);
        console.log(min);
    }
}
