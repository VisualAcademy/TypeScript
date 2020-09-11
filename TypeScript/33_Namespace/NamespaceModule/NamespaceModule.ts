// 네임스페이스 선언
namespace Book {
    export class TypeScriptBook {
        constructor() {
            console.log("책");
        }
    }
}

// 모듈 선언
module Lecture {
    export class TypeScriptLecture {
        constructor() {
            console.log('강의');
        }
    }
}

var book = new Book.TypeScriptBook(); // 책
var lecture = new Lecture.TypeScriptLecture(); // 강의
