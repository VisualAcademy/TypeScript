﻿using System;

class TupleNamed
{
    
    {
        var boy = (Name: "철수", IsStudent: true, OrderPrice: 1_000 );
        console.log(
            $"{boy.Name}(초등학생: {boy.IsStudent}) - 주문: {boy.OrderPrice:C0}");
    }
}
