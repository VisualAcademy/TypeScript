// ObjectAndClass.ts
// 개체와 클래스 비교
//[1] Object: 개체 리터럴
const todo1 = { id: undefined, title: undefined, isDone: undefined };
console.log(`${todo1.id} - ${todo1.title}(${todo1.isDone})`);

//[2] Class: 클래스 선언 및 클래스의 인스턴스 생성
//[2][1] 클래스 선언
export class TodoClass {
    id;
    title;
    isDone;
}
//[2][2] 클래스의 인스턴스 생성: 설계도인 클래스로부터 개체 하나 생성
const todo2 = new TodoClass();
console.log(`${todo2.id} - ${todo2.title}(${todo2.isDone})`);
