// 형식 변환
module TypeConversionDemo {
    let s: string = "12.34"; 

    let n1: number = parseInt(s); // parseFloat()
    console.log(`n1 => ${n1}: ${typeof n1}`); 

    let n2: number = +s; // + 연산자로 number 형식으로 변환
    console.log(`n2 => ${n2}: ${typeof n2}`);     
}
