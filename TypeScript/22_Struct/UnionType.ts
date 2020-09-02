// 공용 구조체 형식(Union Type)
namespace UnionType {
    let twoTypes: string | number;

    twoTypes = "공용 구조체 형식"; //[1] 문자열 저장 가능
    console.log(twoTypes); 

    twoTypes = 1234; //[2] 숫자 형식 저장 가능
    console.log(twoTypes); 

    //twoTypes = true; //[?] 다른 형식이 오면 에러
}
