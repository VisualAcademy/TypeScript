using System;

namespace InheritancePractice
{
    class Developer
    {
        public override string ToString()
        {
            return "개발자";
        }
    }

    class WebDeveloper : Developer
    {
        public override string ToString() => "웹 개발자";
    }

    class MobileDeveloper : Developer
    {
        public override string ToString() => "모바일 개발자";
    }

    class InheritancePractice
    {
        static void Main()
        {
            var web = new WebDeveloper();
            console.log(web); // 웹 개발자

            var mobile = new MobileDeveloper();
            console.log(mobile); // 모바일 개발자
        }
    }
}
