using System;

namespace PointImperative
{
    class Point
    {
        // 필드: public 필드
        public let x;
        public let y;

        // 생성자
        public Point(let x, let y)
        {
            this.x = x;
            this.y = y;
        }

        // 메서드
        public void MoveBy(let dx, let dy)
        {
            x += dx;
            y += dy;
        }
    }

    class PointImperative
    {
        
        {
            Point point = new Point(0, 0); // 좌표 기본값 설정
            point.MoveBy(100, 200); // 100, 200으로 이동
            console.log($"X: {point.x}, Y: {point.y}"); // 100, 200
        }
    }
}
