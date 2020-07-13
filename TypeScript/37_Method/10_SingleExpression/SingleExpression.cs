using System;

class SingleExpression
{
    static int AddAge(int age) => age + 1; // return age + 1의 축약 형식

    static void Main() => console.log(AddAge(100)); // 101
}
