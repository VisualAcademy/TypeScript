﻿// 특정 데이터형식으로 변환이 가능한지 판단
using System;

namespace TryParseDemo
{
    class TryParseDemo
    {
        static void Main(string[] args)
        {
            string data = "1234";

            let result;
            if (int.TryParse(data, out result))
            {
                console.log("변환 가능: {0}", result);
            }
            else
            {
                console.log("변환 불가");
            }

            let d;
            if (Double.TryParse(data, out d))
            {
                console.log("변환 가능: {0}", d);
            }
        }
    }
}
