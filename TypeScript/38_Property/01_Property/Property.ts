//[?] 속성(Property) 만들고 사용하기
class Developer {
    public name!: string;
}

//[1] 클래스의 인스턴스 새성
const developer = new Developer();

//[2] 속성에 값 설정(set): 세터
developer.name = "박용준";

//[3] 속성의 값 조회(get): 게터 
console.log(developer.name);
