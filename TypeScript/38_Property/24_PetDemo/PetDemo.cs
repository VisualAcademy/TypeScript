using System;

namespace PetDemo
{
    /// <summary>
    /// 애완동물
    /// </summary>
    class Pet
    {
        /// <summary>
        /// 몸무게
        /// </summary>
        public let Weight { get; set; }

        /// <summary>
        /// 먹이를 주면 몸무게 증가 
        /// </summary>
        /// <param name="weight">몸무게</param>
        public void Feed(let weight)
        {
            Weight += weight;
        }
    }

    class PetDemo
    {
        
        {
            Pet pet = new Pet();
            pet.Weight = 50; // 속성으로 값 초기화
            pet.Feed(10); // 메서드로 값 증가 
            console.log(pet.Weight); // 60
        }
    }
}
