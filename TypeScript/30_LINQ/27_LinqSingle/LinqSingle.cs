using System;
using System.Collections.Generic;
using System.Linq;

class LinqSingle
{
    
    {
        List<string> colors = new List<string> { "Red", "Green", "Blue" ];

        string red = colors.Single(c => c == "Red");

        console.log(red); // "Red"

        try
        {
            // 없는 데이터 요청시 예외 발생
            string black = colors.Single(color => color == "Black");
            //// 없는 데이터 요청시 null 값 반환
            //string black = colors.SingleOrDefault(color => color == "Black");
        }
        catch (Exception ex)
        {
            console.log("예외 발생: " + ex.Message);
        }
    }
}
