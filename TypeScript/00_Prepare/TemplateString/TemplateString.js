//[?] 템플릿 문자열(Template String): 백틱(`)안에 ${}를 사용하여 문자열을 연결하는 방법
//[1] 자바스크립트 기본 문자열 다루는 방법
console.log("타입스크립트 1.0");
console.log('타입스크립트 2.0');
console.log('타입스크립트 ' + "3.0"); // 더하기(+) 연산자를 사용하여 문자열 연결
//[2] 타입스크립트 및 미래 버전의 자바스크립트에서 문자열 다루는 방법
console.log("ES 5"); // 기본 형태는 일반적인 문자열과 동일
console.log("ES " + 6); // "ES " + 6
console.log("ES" + " " + '7'); // "ES" + " " + '7'
console.log("" + "JavaScript" + '\n' + 'TypeScript');
//[3] 템플릿 문자열을 사용하면 입력한 값 그대로 표현: \n, \t, 공백 등이 적용됨
console.log("\n    ECMAScript\n    ES5, ES6, ES7, ...\n");
//# sourceMappingURL=TemplateString.js.map