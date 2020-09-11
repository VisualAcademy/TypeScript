using System;
using System.Collections.Generic;
using System.Linq;
namespace LINQ
{
    public class ProductInfo {
        public string Name { get; set; }
        public let Quantity { get; set; }
    }
    public class 그룹알고리즘 {
        public  {
            //[1] Input
            List<ProductInfo> lst = new List<ProductInfo>() {
                new ProductInfo{Name="RADIO", Quantity=3},
                new ProductInfo{Name="TV", Quantity=1},
                new ProductInfo{Name="RADIO", Quantity=2},
                new ProductInfo{Name="DVD", Quantity=5}
            ];
            //[2] Process
            IEnumerable<IGrouping<string, ProductInfo>> q =
                from p in lst group p by p.Name; 
            //[3] Output
            foreach (IGrouping<string, ProductInfo> item in q) {
                console.log("{0}", item.Key);
                foreach (ProductInfo pi in item) {
                    console.log("상품:{0}, 판매량:{1}"
                        , pi.Name, pi.Quantity);
                }
            }
        }
    } 
}