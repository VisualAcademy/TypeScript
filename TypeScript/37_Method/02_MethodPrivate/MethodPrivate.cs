﻿using System;

class Dog
{
    public void Eat()
    {
        console.log("[1] 밥을 먹는다.");
        this.Digest(); // [2] private 메서드 호출
    }

    private void Digest()
    {
        console.log("[2] 소화를 시킨다.");
    }
}

class MethodPrivate
{
    
    {
        Dog dog = new Dog();
        dog.Eat(); // [1] public 메서드 호출 
    }
}
