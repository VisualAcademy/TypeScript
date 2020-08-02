//[?] 2! + 3! + 4!의 결과를 출력하는 프로그램 
class 알고리즘_합계_팩토리얼
{
    static void Main()
    {
        let sum = 0;
        let i = 1;
        let f = 1;

        do
        {
            i = i + 1;
            if (i < 5)
            {
                f = f * i;      // (((1 * 2) * 3) * 4)
                sum = sum + f;  // (1*2)+(1*2*3)+(1*2*3*4)
            }
            else
            {
                break;  // 빠져 나오기 
            }
        } while (true); // 무한 루프

        System.console.log(sum); // 32
    }
}
