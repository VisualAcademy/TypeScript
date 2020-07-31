// 추상 클래스
abstract class Shape {
    abstract getArea(): number;
}

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
