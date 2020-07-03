function errorFunction() {
    var err = new Error("에러가 발생했습니다.");
    throw err; 
    // throw new SyntaxError("문법에러가 발생했습니다.");
}

errorFunction();
