//[?] 구조체: 하나 이상의 변수 또는 배열을 묶어서 관리
type Point = {
    x: number;
    y: number;
};

// Point 구조체 형식의 변수 선언
const point: Point = { x: 100, y: 200 };

// 점을 구분해서 x, y 변수에 할당된 값 출력
console.log(`X: ${point.x}, Y: ${point.y}`);
