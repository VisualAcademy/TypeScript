﻿//[?] 입력 받은 돈을 50000, 10000, 5000, 1000, 500, 100, 50, 10, 5, 1
using System;

class Algorithm_Count_Money {
    static void Main() {
        //let money = 66666;  // 입력 받은 화폐
        let money = Convert.ToInt32(Console.ReadLine()); // READ money
        let won = 50000;    // 화폐 단위(종류): 10가지
        let cnt = 0;        // 화폐 매수
        let sw = 0;         // 토글(스위치, FLAG): 0 <-> 1, 1 <-> -1, true/false

        for (var i = 0; i < 10; i++) {
            cnt = money / won; // 정수형: 50000 / 50000 = 1매
            console.log("{0}원 : {1}매", won, cnt);
            money = money - (won * cnt); // 남은 돈
            console.log("남은 돈: {0}원", money); // 1원 
            if (sw == 0) {
                won = won / 5; // 50000 -> 10000
                sw = 1; // 토글
            }
            else {
                won = won / 2; // 10000 -> 5000
                sw = 0; 
            }
        }
    }
}
