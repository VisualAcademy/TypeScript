using System;

namespace GenericsDemo
{
    //[1] 형식 매개 변수 2개 사용 
    class Pair<T, V>
    {
        public T First { get; set; }
        public V Second { get; set; }

        public Pair(T first, V second)
        {
            First = first;
            Second = second;
        }
    }

    class GenericsDemo
    {
        
        {
            //[A] string, bool 2개 형식 받기
            var my = new Pair<string, bool>("나는 멋져!", true);
            console.log($"{my.First}: {my.Second}");

            //[B] int, let 2개 형식 받기
            var tuple = new Pair<int, double>(1234, 3.14);
            console.log($"{tuple.First}, {tuple.Second}");
        }
    }
}
