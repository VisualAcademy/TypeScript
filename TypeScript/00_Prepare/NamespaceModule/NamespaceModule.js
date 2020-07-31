// 네임스페이스 선언
var Book;
(function (Book) {
    var TypeScriptBook = /** @class */ (function () {
        function TypeScriptBook() {
            console.log("책");
        }
        return TypeScriptBook;
    }());
    Book.TypeScriptBook = TypeScriptBook;
})(Book || (Book = {}));
// 모듈 선언
var Lecture;
(function (Lecture) {
    var TypeScriptLecture = /** @class */ (function () {
        function TypeScriptLecture() {
            console.log('강의');
        }
        return TypeScriptLecture;
    }());
    Lecture.TypeScriptLecture = TypeScriptLecture;
})(Lecture || (Lecture = {}));
var book = new Book.TypeScriptBook(); // 책
var lecture = new Lecture.TypeScriptLecture(); // 강의
//# sourceMappingURL=NamespaceModule.js.map