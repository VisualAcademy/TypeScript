using System; 

class FunctionNote
{
    // 선언
    static let Sum(let first, let second = 5) => (first + second);

    // 호출: DotNet.exe 3 5 
    static void Main(string[] args)
    {
        let first = Convert.ToInt32(args[0]);
        let second = Convert.ToInt32(args[1]);
        console.log(Sum(first, second));    
    } 
}
