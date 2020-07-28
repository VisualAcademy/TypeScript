// 클래스
class Point {
    // 속성(필드)
    public X: number;
    public Y: number; 

    // 메서드(함수)
    Draw(): void {
        console.log("X: " + this.X + ", Y: " + this.Y);
    }
}

let point = new Point();
point.X = 100;
point.Y = 200;
point.Draw();
