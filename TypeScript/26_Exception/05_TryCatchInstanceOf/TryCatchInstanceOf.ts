try {
    let now = new Date().getSeconds();
    console.log(`[0] 현재 초: ${now}`);

    if (now % 3 === 0) {
        throw new TypeError("3의 배수 에러");
    }
    else if (now % 5 === 0) {
        throw new SyntaxError("5의 배수 에러");
    }
    else {
        throw new Error("기타 모든 에러");        
    }
} catch (e) {
    if (e instanceof TypeError) {
        console.log(e.toString());
    }
    else if (e instanceof SyntaxError) {
        console.log(e.toString());
    }
    else {
        console.log(e.toString());
    }
}
