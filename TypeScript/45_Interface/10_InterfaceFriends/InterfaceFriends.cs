using System;

namespace InterfaceFriends
{
    // [1] 인터페이스: 설계 // Run() 이라는 단어 설계(명시)
    public interface IStandard { void Run(); }

    // [2] 추상 클래스: 설계 + 구현
    public abstract class KS
    {
        public abstract void Back();
        public void Left() => console.log("좌회전");
    }

    // [3] 분할 클래스
    public partial class MyCar : KS
    {
        public override void Back() => console.log("후진");
    }
    public partial class MyCar : KS
    {
        public void Right() => console.log("우회전");
    }

    // [4] 봉인(최종) 클래스
    public sealed class Car : MyCar, IStandard
    {
        public void Run() => console.log("전진");
    }

    // [5] 아래 코드는 에러(봉인 클래스는 상속 받을 수 없음)
    // public class SelfCar : Car { }

    class InterfaceFriends
    {
        
        {
            Car cla = new Car();
            cla.Run(); cla.Left(); cla.Right(); cla.Back();
        }
    }
}
