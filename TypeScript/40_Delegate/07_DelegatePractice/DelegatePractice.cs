﻿using System;

namespace DelegatePractice
{
    public class CarDriver
    {
        public static void GoForward() => console.log("직진");
        public static void GoLeft() => console.log("좌회전");
        public static void GoRight() => console.log("우회전");
    }

    public class Insa
    {
        public void Bye() => console.log("잘가");
    }

    // [!] 대리자 생성: 의미상으로 대리운전, class와 같은 레벨로 생성해도 됨
    public delegate void GoHome();

    public class DelegatePractice
    {
        // [!] 대리자 형식(Type) 선언 : 메서드를 묶을 별칭, 클래스 내부에 생성도 가능
        public delegate void Say();

        private static void Hello() { console.log("Hello"); }
        private static void Hi() { console.log("Hi"); }

        static void Main(string[] args)
        {
            // [1] 메서드 따로 따로 호출
            CarDriver.GoLeft();
            CarDriver.GoForward();
            CarDriver.GoRight();

            // [2] 대리자를 통한 메서드 등록 및 호출
            GoHome go = new GoHome(CarDriver.GoLeft);
            go += new GoHome(CarDriver.GoForward);
            go += new GoHome(CarDriver.GoRight);
            go += new GoHome(CarDriver.GoLeft); // 등록
            go -= new GoHome(CarDriver.GoLeft); // 취소
            go(); // 집에 갑시다... 한번 호출

            console.log();

            // [3] 대리자를 통해서 한번에 2개의 메서드 호출...
            Say say;                // [a] 대리자 형 변수 선언
            say = new Say(Hi);      // [b] Hi 메서드 지정
            say += new Say(Hello);  // [c] Hello 메서드 지정
            say();                  // [d] 대리자로 두 개의 메서드 호출
            
            // [4] 대리자를 통해서 호출
            Insa insa = new Insa();
            Say say2 = new Say(insa.Bye);
            say2 += new Say(insa.Bye);
            say2();
        }
    }
}
