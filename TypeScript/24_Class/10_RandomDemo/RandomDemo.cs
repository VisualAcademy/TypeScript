using System;

class RandomDemo
{
    
    {
        // Random 클래스의 인스턴스 생성
        Random random = new Random();

        console.log(random.Next());       // 임의의 정수
        console.log(random.Next(5));      // 0 ~ 4
        console.log(random.Next(1, 10));  // 1 ~ 10
    }
}
