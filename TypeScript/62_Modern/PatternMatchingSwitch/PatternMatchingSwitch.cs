using System;

namespace PatternMatchingSwitch
{
    class Shape { }

    class Rectangle : Shape { }

    class Circle : Shape { }

    class PatternMatchingSwitch
    {
        
        {
            ShowShape(new Circle());        // 원
            ShowShape(new Rectangle());     // 사각형
        }

        static void ShowShape(Shape shape)
        {
            switch (shape)
            {
                case Circle s:
                    console.log("원");
                    break;
                case Rectangle r:
                    console.log("사각형");
                    break;
            }
        }
    }
}
