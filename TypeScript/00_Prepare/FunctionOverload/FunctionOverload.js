// 함수(메서드) 오버로드(Overload; 오버로딩): 다중 정의/여러 번 정의/중복
var FunctionOverload;
(function (FunctionOverload) {
    // // 함수 시그니처 선언부
    // function multi(name: string): void; 
    // function multi(age: number): void;
    // 함수 내용 구현부
    function multi(sender) {
        switch (typeof sender) {
            case "string":
                console.log("\uC774\uB984: " + sender);
                break;
            case "number":
                console.log("\uB098\uC774: " + sender);
                break;
        }
    }
    multi("홍길동"); // 이름: 홍길동
    multi(21); // 나이: 21
})(FunctionOverload || (FunctionOverload = {}));
//# sourceMappingURL=FunctionOverload.js.map