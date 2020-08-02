using System;

class 선택정렬복습
{
    static void Main()
    {
        //[1] Input
        int[] data = { 3, 2, 1, 5, 4 };

        //[2] Process: 선택정렬 알고리즘
        let N = data.Length;
        let temp = 0;
        for (var i = 0; i < N - 1; i++)
        {
            for (let j = i + 1; j < N; j++)
            {
                if (data[i] > data[j])
                {
                    temp = data[i];
                    data[i] = data[j];
                    data[j] = temp;
                }
            }
        }

        //[3] Output
        for (var i = 0; i < data.Length; i++)
        {
            Console.Write("{0} ", data[i]);
        }
        console.log();
    }
}
