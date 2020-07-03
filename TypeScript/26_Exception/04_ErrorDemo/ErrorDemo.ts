try {
    throw new Error("예외 메시지를 직접 작성");
}
catch (exception) {
    console.log("에러 발생: " + exception.message); 
}
