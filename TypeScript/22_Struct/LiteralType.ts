// 리터럴 형식
namespace LiteralType {
    let ts: "TypeScript"; //[1] 문자열 리터럴 형식
    ts = "TypeScript";
    //ts = "C#"; // 이 코드는 에러 발생
    console.log(ts);

    let cs: "TypeScript" | "C#"; //[2] 여러 문자열 리터럴 형식
    cs = "C#";
    console.log(cs);

    let version: 4 | 8; //[3] 숫자 리터럴 형식
    version = 4;
    console.log(`${ts} ${version}`);
}
