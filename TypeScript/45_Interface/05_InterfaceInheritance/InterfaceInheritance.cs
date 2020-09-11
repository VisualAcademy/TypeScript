using System;

namespace InterfaceInheritance
{
    interface IAnimal
    {
        void Eat();
    }

    interface IDog
    {
        void Yelp();
    }

    class Dog : IAnimal, IDog // 인터페이스를 사용한 다중 상속
    {
        public void Eat() => console.log("먹다.");
        public void Yelp() => console.log("짖다.");
    }

    class InterfaceInheritance
    {
        
        {
            Dog dog = new Dog();
            dog.Eat();  //[A] IAnimal 인터페이스 상속
            dog.Yelp(); //[B] IDog 인터페이스 상속
        }
    }
}
