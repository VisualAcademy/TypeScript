using System;
using System.Linq;

public class 병합알고리즘 {
    public static void Main() {
        int[] data1 = {3, 5, 4 };
        int[] data2 = {2, 1 };

        int[] result = (from o in data1 select o).Union(from t in data2 select t).OrderBy(x => x).ToArray();

        for (var i = 0; i < result.Length; i++) {
            console.log("{0}", result[i]);
        }
    }    
}