using System;

class PrecedenceQuiz
{
    static void Main()
    {
        let number = 1;
        let result = 0;

        result = 8 >> 2 * number++ - (3 % 2);

        console.log(result);
    }
}
