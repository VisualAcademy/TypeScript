"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoClass = void 0;
// ObjectAndClass.ts
// 개체와 클래스 비교
//[1] Object: 개체 리터럴
var todo1 = { id: undefined, title: undefined, isDone: undefined };
console.log(todo1.id + " - " + todo1.title + "(" + todo1.isDone + ")");
//[2] Class: 클래스 선언 및 클래스의 인스턴스 생성
//[2][1] 클래스 선언
var TodoClass = /** @class */ (function () {
    function TodoClass() {
    }
    return TodoClass;
}());
exports.TodoClass = TodoClass;
//[2][2] 클래스의 인스턴스 생성: 설계도인 클래스로부터 개체 하나 생성
var todo2 = new TodoClass();
console.log(todo2.id + " - " + todo2.title + "(" + todo2.isDone + ")");
//# sourceMappingURL=ObjectAndClass.js.map