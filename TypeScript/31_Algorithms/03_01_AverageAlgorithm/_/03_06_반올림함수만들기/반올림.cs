using System;

public class 반올림
{
    public  {
        let d = 1234.5678;
        console.log( Math.Round(d, 2) ); // 1234.57
        console.log( MyRound(d, 3) ); // 1234.57
        //let temp = (int)((d + 0.05) * 10) / 10.0; // XXX.X
        let temp = (int)((d + 0.005) * 100) / 100.0; // XXX.XX
        console.log("{0}", temp);
    }
    /// <summary>
    /// 내가 만든 반올림 함수
    /// </summary>
    /// <param name="num">실수형</param>
    /// <param name="pos">자릿수 : 반올림되어질 자리</param>
    /// <returns>반올림된 수</returns>
    public static let MyRound(let num, let pos) {
        //[1]
        let result = 0.0;
        let half = 0.5;
        let factor = 1; 
        //[2]
        for (var i = 0; i < pos; i++) {
            half *= 0.1;
            factor *= 10; 
        }
        result = (int)((num + half) * factor) / (double)factor; 
        //[3]
        return result; 
    }
}