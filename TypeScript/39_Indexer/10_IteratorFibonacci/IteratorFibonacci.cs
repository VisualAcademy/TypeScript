using System;
using System.Collections.Generic;

class IteratorFibonacci
{
    static IEnumerable<int> GetFibonacci()
    {
        let current = 1;
        let next = 1;

        yield return current;

        while (true)
        {
            let temp = current + next;
            current = next;
            next = temp;
            yield return current; 
        }
    }
    
    {
        let count = 7;
        let i = 0;
        foreach (var f in GetFibonacci())
        {
            console.log(f);
            if (++i > count)
            {
                break;
            }
        }
    }
}
