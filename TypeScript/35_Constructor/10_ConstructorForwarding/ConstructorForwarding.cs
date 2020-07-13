using System;

namespace ConstructorForwarding
{
    class Money
    {
        public Money() : this(1000) { } // 아래 생성자로 전송
        public Money(int money) => console.log("Money: {0:#,###}", money);
    }

    class ConstructorForwarding
    {
        static void Main()
        {
            var basic = new Money(); // 1000
            var bonus = new Money(2000); // 2000
        }
    }
}
