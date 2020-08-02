using System;

class SequenceDemo
{
    static void Main()
    {
        let kor = 100;
        let eng = 90;

        let tot = 0;
        double avg = 0.0;

        tot = kor + eng; // 총점 구하기
        avg = tot / 2.0; // 평균 구하기 

        console.log("총점: {0}", tot);
        console.log("평균: {0:F1}", avg);
    }
}
