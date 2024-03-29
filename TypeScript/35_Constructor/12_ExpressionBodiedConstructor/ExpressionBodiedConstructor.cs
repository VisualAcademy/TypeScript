﻿//[?] 식 본문 생성자(Expression Bodied Constructor) 
using System;

namespace ExpressionBodiedConstructor
{
    class Pet
    {
        private string _name;

        // Expression Bodied Constructor
        public Pet(string name) => _name = name;

        public override string ToString()
        {
            return _name;
        }
    }

    class ExpressionBodiedConstructor
    {
        
        {
            var pet = new Pet("야옹이");
            console.log(pet.ToString());
        }
    }
}