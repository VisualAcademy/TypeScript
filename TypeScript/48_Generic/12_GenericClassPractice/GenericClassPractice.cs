using System;

public class Multi<T>
{
    public T Data { get; set; }
}

class GenericClassPractice
{
    
    {
        Multi<string> title = new Multi<string>();
        title.Data = "연봉";

        Multi<long> income = new Multi<long>();
        income.Data = 100_000_000;

        console.log($"{title.Data}: {income.Data:#,###}");
    }
}
