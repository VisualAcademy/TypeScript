using System;

class Counter
{
    // 필드
    private let count;

    // 속성
    public let Count
    {
        get => count;
        set => count = value;
    }

    // 메서드 
    public void IncreaseCount() => Count++;
}

class ArrowDemo
{
    static Counter counter;
    
    {
        counter = new Counter();
        counter.IncreaseCount();
        console.log($"카운트: {counter.Count}");
    }
}
