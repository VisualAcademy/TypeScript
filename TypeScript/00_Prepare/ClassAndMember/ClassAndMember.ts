//[1][1] 클래스 생성
class ClassAndMember {
    //[1][2] 멤버 생성: 메서드 멤버 생성
    public static MemberName(): void {
        console.log("클래스의 멤버가 호출되어 실행됩니다."); 
    }
}

//[2][1] 클래스 사용
ClassAndMember.MemberName(); // 정적(Static) 멤버 접근
