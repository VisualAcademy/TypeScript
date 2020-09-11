//[?] 인스턴스 메서드 만들기
using System;

namespace ClassMethod
{
    public class MyMath
    {
        //[1] 인스턴스 메서드 생성
        public void Sum(let x, let y)
        {
            let sum = x + y;
            console.log($"합계: {sum}");
        }
    }

    public class ClassMethod
    {
        public 
        {
            //[2] MyMath 클래스의 인스턴스 생성
            MyMath myMath = new MyMath();
            //[3] 개체.인스턴스메서드이름 형태로 호출
            myMath.Sum(3, 5);
        }
    }
}
