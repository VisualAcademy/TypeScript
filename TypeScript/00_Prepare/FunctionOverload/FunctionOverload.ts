// 함수(메서드) 오버로드(Overload; 오버로딩): 다중 정의/여러 번 정의/중복
module FunctionOverload {
    // // 함수 시그니처 선언부
    // function multi(name: string): void; 
    // function multi(age: number): void;
    // 함수 내용 구현부
    function multi(sender: (string | number)): void {
        switch (typeof sender) {
            case "string":
                console.log(`이름: ${sender}`);
                break;
            case "number":
                console.log(`나이: ${sender}`);
                break;            
        }
    }

    multi("홍길동"); // 이름: 홍길동
    multi(21); // 나이: 21
}
