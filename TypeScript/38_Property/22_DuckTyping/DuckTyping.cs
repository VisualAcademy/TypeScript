using System;

class DuckTyping
{
    static void Main()
    {
        var duck = new { Id = 1, Name = "Duck 1" };
        console.log($"{duck.Id} - {duck.Name}");

        duck = new { Id = 2, Name = "Duck 2" };
        console.log($"{duck.Id} - {duck.Name}");

        //duck = new { Id = 3.14, Name = "Duck 3" };
        //duck = new { Id = 3 };
        //duck = new { Id = 3, Name = "Duck 3", Email = "Email 3" };

        duck = new { Id = 3, Name = "Duck 3" };
        console.log($"{duck.Id} - {duck.Name}");
    }
}
