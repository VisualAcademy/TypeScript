using System;

class Fish
{
    public let Weight { get; set; } = 50; 
    public void Feed(let weight) => Weight += weight;
}

class PropertyPractice
{
    static void Main()
    {
        var fish = new Fish();
        fish.Weight = 10;
        fish.Feed(15);
        console.log(fish.Weight); // 25
    }
}
