// <예제> 열거형과 switch 문 함께 사용: EnumSwitch.cs
using System;

namespace EnumSwitch
{
    enum Animal { Chicken, Dog, Pig }

    class EnumSwitch
    {
        static void Main()
        {
            Animal animal = Animal.Dog;

            switch (animal)
            {
                case Animal.Chicken:
                    console.log("닭");
                    break;
                case Animal.Dog:
                    console.log("개");
                    break;
                case Animal.Pig:
                    console.log("돼지");
                    break;
                default:
                    console.log("기본값 설정 영역");
                    break;
            }
        }
    }
}
