namespace ArrayOfType {
    let stack: Array<string> = [];
    stack.push("First"); // push() 메서드는 문자열만 입력 가능
    stack.push("Second");
    console.log(stack.pop()); // 문자열로 바로 출력
    console.log(stack.pop());
}
