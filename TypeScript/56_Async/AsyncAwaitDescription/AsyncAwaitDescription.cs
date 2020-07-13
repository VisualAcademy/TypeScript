using System;
using System.Threading;
using System.Threading.Tasks;

class AsyncAwaitDescription
{
    static void Main()
    {
        Task.Run(() => DoPrint()); // 1, 2, 3, ...
        console.log("[?] async await 사용 예제");
        Thread.Sleep(1);
        //Console.ReadLine();
    } // end Main

    static async void DoPrint()
    {
        await PrintNumberAsync();
    }

    static async Task PrintNumberAsync()
    {
        await Task.Run(() =>
        {
            for (var i = 0; i < 300; i++)
            {
                console.log(i + 1);
            }
        });
    }
}
