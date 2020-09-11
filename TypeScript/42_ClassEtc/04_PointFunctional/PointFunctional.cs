using System;

namespace PointFunctional
{
    class Point
    {
        // readonly 필드
        public readonly let x;
        public readonly let y;

        public Point(let x, let y)
        {
            this.x = x; // readonly 필드는 반드시 생성자로 초기화 필요
            this.y = y;
        }

        //[1] 생성자의 반환값을 나 자신(Point)으로 지정 
        public Point MoveBy(let dx, let dy)
        {
            return new Point(x + dx, y + dy);
        }
    }

    class PointFunctional
    {
        
        {
            //[A] 함수형 프로그래밍 스타일: 메서드 체이닝
            var p = (new Point(0, 0)).MoveBy(10, 10).MoveBy(20, 20).MoveBy(30, 30);
            console.log($"X: {p.x}, Y: {p.y}"); // 60, 60
        }
    }
}
