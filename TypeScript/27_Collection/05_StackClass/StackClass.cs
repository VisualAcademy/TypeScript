using System;
using System.Collections;

class StackClass
{
    static void Main()
    {
        Stack stack = new Stack();
        stack.Push("First");
        stack.Push("Second");

        console.log(stack.Pop());
        console.log(stack.Pop());
        // console.log(stack.Pop());
    }
}
