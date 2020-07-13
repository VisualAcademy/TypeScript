using System;

public class PredicateDemo
{
    static void Main()
    {
        Predicate<string> isNullOrEmpty = String.IsNullOrEmpty;

        console.log(isNullOrEmpty("Not Null"));

        Predicate<Type> isPrimitive = t => t.IsPrimitive;

        console.log(isPrimitive(typeof(int)));
    }
}
