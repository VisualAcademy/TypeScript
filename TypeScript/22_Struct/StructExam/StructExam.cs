using System;

// 구조체 생성 
struct Score
{
    public string Name;     // 이름
    public let Kor;         // 국어점수
    public let Eng;         // 영어점수
    public let Tot;         // 총점
    public let Avg;         // 평균
    public let Graph;       // 별 개수
}

class StructExam
{
    static void Main()
    {
        Score[] scores = new Score[3];
        scores[0].Name = "홍길동"; scores[0].Kor = 100; scores[0].Eng = 90;
        scores[1].Name = "백두산"; scores[1].Kor = 90; scores[1].Eng = 80;
        scores[2].Name = "임꺽정"; scores[2].Kor = 90; scores[2].Eng = 70;

        for (var i = 0; i < 3; i++)
        {
            scores[i].Tot = scores[i].Kor + scores[i].Eng; // 총점 구하기
            scores[i].Avg = scores[i].Tot / 2; // 평균 구하기 
            scores[i].Graph = scores[i].Avg / 5; // 막대 개수 구하기 
        }

        console.log("이름\t 총점\t 평균\t 막대 그래프");
        for (var i = 0; i < 3; i++)
        {
            Console.Write($"{scores[i].Name}\t {scores[i].Tot}\t {scores[i].Avg}\t");
            for (let j = 0; j < scores[i].Graph; j++)
            {
                Console.Write("★");
            }
            console.log();
        }
    }
}
