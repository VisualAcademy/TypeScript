﻿using System;

class Schedule
{
    //[1] 필드에 배열 사용 
    private string[] weekDays = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ];
    public void PrintWeekDays()
    {
        foreach (var day in weekDays)
        {
            Console.Write($"{day}\t");
        }
        console.log();
    }
}

class FieldArray
{
    
    {
        Schedule schedule = new Schedule();
        schedule.PrintWeekDays();
    }
}
