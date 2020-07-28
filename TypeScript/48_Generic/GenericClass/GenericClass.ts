//[?] 제네릭 클래스: 형식 매개 변수 T에 지정한 형식으로 클래스와 멤버의 성질이 결정

//[1] 클래스<T> 형태로 제네릭 클래스 만들기 
class Cup<T> {
    public Content!: T;
}

//[A] 형식 매개 변수 T에 string 전달하여 문자열 형식을 저장하는 속성 생성
let text = new Cup<string>();
text.Content = "문자열"; // string

//[B] 형식 매개 변수 T에 number 전달하여 숫자 형식을 저장하는 속성 생성
let integer = new Cup<number>();
integer.Content = 1_234; // number

console.log(`${text.Content}, ${integer.Content}`);
