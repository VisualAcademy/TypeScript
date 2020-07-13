// <예제>열거형으로 관련 있는 항목 묶기 : EnumAnimal.cs
using System;

class EnumAnimal
{
    enum Animal { Mouse, Cow, Tiger }

    static void Main()
    {
        Animal animal = Animal.Tiger;
        console.log(animal); // "Tiger"

        if (animal == Animal.Tiger)
        {
            console.log("호랑이");
        }
    }
}
