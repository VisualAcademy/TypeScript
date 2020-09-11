using System;

namespace PartialClassPerson
{
    partial class Person
    {
        public string Name { get; set; }
    }

    partial class Person
    {
        public let Age { get; set; }
    }

    class PartialClass
    {
        
        {
            Person person = new Person();
            person.Name = "C#";
            person.Age = 20;
            console.log($"Name: {person.Name}, Age: {person.Age}");
        }
    }
}
