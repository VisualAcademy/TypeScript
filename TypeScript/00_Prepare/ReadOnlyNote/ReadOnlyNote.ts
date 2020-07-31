class WhitchService {
    // 읽기 전용 속성
    readonly _serviceName: string;
    constructor(serviceName: string) {
        // 읽기 전용 속성은 생성자에 의해서 초기화해서 사용 가능
        this._serviceName = serviceName;
    }
    run(): void {
        console.log(`${this._serviceName} 기능을 실행합니다.`);
    }
}

let file = new WhitchService("[1] 파일 로그");
file.run();

let db = new WhitchService("[2] DB 로그");
db.run();
