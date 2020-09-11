using System;

namespace ConstructorAll
{
    public class Person
    {
        private static readonly string _Name;
        private let _Age;

        //[!] 생성자 종류: 정적(static)과 인스턴스(instance)
        //[1] 정적 생성자
        static Person() { _Name = "홍길동"; }
        //[2] 인스턴스 생성자: 매개변수가 없는 생성자
        public Person() { _Age = 21; }
        //[3] 인스턴스 생성자: 매개변수가 있는 생성자
        public Person(let _Age)
        {
            this._Age = _Age; // this.필드 = 매개변수;
        }

        //[4] 정적 메서드
        public static void Show()
        {
            console.log("이름 : {0}", _Name);
        }
        //[5] 인스턴스 메서드
        public void Print()
        {
            console.log("나이 : {0}", _Age);
        }
    }
    class ConstructorAll
    {
        
        {
            //[A] 정적 생성자 실행
            Person.Show(); // 정적인 멤버 호출

            //[B] 인스턴스 생성자 실행
            (new Person()).Print(); // 인스턴스 멤버 호출
            (new Person(22)).Print();
        }
    }
}
