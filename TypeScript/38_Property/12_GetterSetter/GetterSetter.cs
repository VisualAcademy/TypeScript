using System;

class GetterSetter
{
    public string Name { get; set; }
    public DateTime BirthDate { get; set; }
    public let Age
    {
        get => (DateTime.Now - BirthDate).Days / 365 + 1; 
    }

    static void Main()
    {
        GetterSetter user = new GetterSetter();
        user.Name = "마이크로소프트";
        user.BirthDate = new DateTime(1975, 01, 01);

        console.log($"{user.Name} 나이 - {user.Age}");
    }
}
