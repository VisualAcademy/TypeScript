

// 초와 한 구분
enum UserType {
    Cho,
    Han
}


/// <summary>대국시작, 판변경, 장군, 멍군, 승리 등의 메시지를 어떤 방식으로 표시할지 결정</summary>
enum AlertMode {
    Console,
    Alert,
    Toastr
}


/// <summary>상차림, 판배치</summary>
enum BoardArrangementMode {
    /// <summary>안상</summary>
    Center,
    /// <summary>왼상</summary>
    Left,
    /// <summary>오른상</summary>
    Right,
    /// <summary>양귀마</summary>
    Both, 
    /// <summary>기동차</summary>
    DieselTrain 
};


// JanggiEngine 최상위 네임스페이스
module JanggiEngine {
    export class Utility {
        // 현재 기물이 궁성안에 있는지 아닌지 확인: 궁성에서는 대각선 이동도 있기 때문에 
        static IsKingdom(x: number, y: number) {
            var r = false; // 일단은 아닌걸로
            if (x >= 3 && x <= 5) {
                // 궁성 체크
                if (y >= 0 && y <= 2 || y >= 7 && y <= 9) {
                    r = true; // 궁성 안
                }
            }
            return r;
        }
    }

    export class Settings {
        static ChoMapStyle: BoardArrangementMode = BoardArrangementMode.Center;
        static HanMapStyle: BoardArrangementMode = BoardArrangementMode.Center;
    }
}






// 색상 관련 열거형
enum Color {
    Red,
    Green,
    Blue
};














//////////////////////////



interface Entity {
    name: string;
    price: number;
    getName(): string;
    setName(value: string): void;
}

var entityTest: Entity = {
    name: "Hammer",
    price: 1234,
    getName: function () {
        return this.name;
    },
    setName: function (s) {
        this.name = s; 
    }
}




// Point 클래스
class Point {
    // 멤버
    //public x: number;
    //public y: number;
    private color: string; // Private 멤버
    // 생성자
    //constructor(x: number, y: number) {
    //    this.x = x;
    //    this.y = y;
    //    // Constructor body
    //}
    // 생성자 선언과 동시에 멤버 추가 그리고 기본값 추가
    constructor(public x: number = 0, public y: number = 0) {
        this.x = x;
        this.y = y;
        // Constructor body
    }
    // 메서드
    dist() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    // 정적 멤버
    static origin = new Point(0, 0); 
    // toString 메서드 오버로드
    public toString() {
        return "x=" + this.x + " y=" + this.y;
    }
}

// Point3D 클래스
class Point3D extends Point {
    // z: number;
    constructor(x: number, y: number, public z: number) {
        super(x, y); 
    }
}


