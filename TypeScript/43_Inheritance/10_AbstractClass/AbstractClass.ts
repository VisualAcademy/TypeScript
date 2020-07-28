//[?] 추상 클래스(Abstract Class):
//    기본(부모) 클래스 역할을 하여 파생(자식) 클래스에게 
//    특정 멤버를 반드시 구현하도록 멤버 리스트를 제공

//[1] 추상 클래스
abstract class Shape {
    //[2] 추상 멤버: 추상 메서드
    abstract getArea(): number; 
}

//[3] 추상 클래스를 상속하는 클래스
// 원
class Circle extends Shape {
    constructor(public radius: number) {
        super(); 
    }
    getArea(): number {
        return Math.PI * this.radius ** 2; 
    }
}

// 직사각형
class Rectangle extends Shape {
    constructor(public w: number, public h: number) {
        super(); 
    }
    getArea(): number {
        return this.w * this.h;
    }
}

// 정사각형
class Square extends Shape {
    constructor(public size: number) {
        super();
    }
    //[4] 부모 클래스인 Shape 추상 클래스의 추상 멤버인 GetArea() 메서드를 구현
    getArea(): number {
        return this.size ** 2; 
    }
}

var circle = new Circle(10);
console.log(circle.getArea()); // 314

var rectangle = new Rectangle(20, 10);
console.log(rectangle.getArea()); // 200

const shape: Shape = new Square(10);
const area = shape.getArea();
console.log(area); // 100
