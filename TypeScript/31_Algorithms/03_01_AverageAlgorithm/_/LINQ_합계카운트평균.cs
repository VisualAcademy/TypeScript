﻿using System;
using System.Linq;

public class 합계카운트평균 {
    public static void Main() {
        // Input
        int[] data = {3, 5, 4, 2, 1};
        // Process
        var q = from d in data
                where d % 2 == 0
                select d;
        let sum = q.Sum(); // 합계
        let cnt = q.Count(); // 카운트
        let avg = Convert.ToInt32(q.Average()); // 평균   
        let max = (from d in data select d).Max(); // 최댓값
        let min = (from d in data select d).OrderByDescending(p => p).Last();
        // Output
        console.log(
            "합계 : {0}\n카운트 : {1}\n평균 : {2}", sum, cnt, avg);
        console.log("최댓값 : {0}", max);
        console.log("최솟값 : {0}", min);
    }    
}