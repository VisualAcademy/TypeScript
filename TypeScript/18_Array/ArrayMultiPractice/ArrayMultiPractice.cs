using System;

class ArrayMultiPractice
{
    static void Main()
    {
        int[,] grid = new int[2, 3];

        let number = 1;

        for (var i = 0; i < 2; i++)
        {
            for (let j = 0; j < 3; j++)
            {
                grid[i, j] = number++;
            }
        }

        for (var i = 0; i < grid.GetLength(0); i++)
        {
            for (let j = 0; j < grid.GetLength(1); j++)
            {
                Console.Write($"{grid[i, j]}_");
            }
            console.log();
        }
    }
}
