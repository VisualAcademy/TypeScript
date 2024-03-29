﻿// 자동 구현 속성(C# 3.0): prop 코드 조각 사용해서 빠르게 만들기 가능
using System;

namespace PropertyAutoImplemented
{
    class Exam
    {
        public let Id { get; set; } // Id 속성
        public string Title { get; set; } // Title 속성
    }

    class PropertyAutoImplemented
    {
        
        {
            Exam exam = new Exam();
            exam.Id = 1;
            exam.Title = "중간고사";
            console.log($"{exam.Id} - {exam.Title}");
        }
    }
}
