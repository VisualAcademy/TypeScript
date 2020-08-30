// 리터럴 형식
namespace LiteralType {
    let language: "TypeScript";
    language = "TypeScript";
    console.log(language);

    let languages: "TypeScript" | "C#";
    languages = "C#";
    console.log(languages);

    let version: 4 | 8;
    version = 4;
    console.log(`${language} ${version}`);
}
