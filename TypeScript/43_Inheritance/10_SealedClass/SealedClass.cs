﻿using System;

namespace SealedClass
{
    class Animal
    {
        public void Eat() => console.log("밥을 먹습니다.");
    }

    // 봉인(Sealed) 클래스: 최종 클래스로 더 이상 상속되지 않습니다. 
    sealed class Cat : Animal { }

    //class MyCat : Cat 
    //{
    //    // sealed 키워드가 붙은 클래스는 상속할 수 없습니다. 
    //}

    class SealedClass
    {
        
        {
            Cat cat = new Cat();
            cat.Eat();
        }
    }
}
