﻿using System;

namespace AbstractClassNote
{
    public abstract class TableBase
    {
        public let Id { get; set; }
        public bool Active { get; set; }
    }

    public class Children : TableBase
    {
        public string Name { get; set; }
    }

    class AbstractClassNote
    {
        
        {
            var child = new Children() { Id = 1, Active = true, Name = "아이" ];
            if (child.Active)
            {
                console.log($"{child.Id} - {child.Name}");
            }
        }
    }
}
