module ObjectLiteral {
    // 개체 리터럴 생성 
    let square = {
        side: 10,
        area: function() {
            return this.side * this.side; 
        }
    }

    // 개체 리터럴 사용
    console.log(`정사각형 넓이: ${square.area()}`);
}
