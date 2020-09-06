// 클래스 선언
class Greeter {
    // 생성자 선언할 때 바로 속성까지 추가
    constructor(public greeting: string) { }
    // 메서드 선언
    getGreeter() {
        return "<h1>" + this.greeting + "</h1>";
    }
}

// 클래스의 인스턴스 생성
var greeter = new Greeter("안녕하세요.");

// 개체의 멤버(메서드) 출력
document.body.innerHTML = greeter.getGreeter();
