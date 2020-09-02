// 형식 별칭(Type Aliase)
namespace TypeAliaseDemo {
    type TechType = 'TypeScript' | 'C#' | 'ASP.NET Core'; //[1] 리터럴 형식 
    //let ts: TechType = "JavaScript"; // 에러 발생
    let ts: TechType = "TypeScript";
    console.log(ts); 

    type PrimitiveType = string | number | boolean; //[2] 공용 구조체 형식 
    //let pt: PrimitiveType = new Date(); // 에러 발생
    let pt: PrimitiveType = Date.now(); 
    console.log(pt);
}
