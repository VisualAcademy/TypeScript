namespace TypeScriptDemo_2 {
    interface Entity {
        name: string;
    }

    function sortByName<T extends Entity>(a: T[]) {
        var result = a.slice(0);
        result.sort(function (x, y) {
            return x.name.localeCompare(y.name);
        });
        return result;
    }

    var products = [
        { name: "Apple", price: 150, id: 1 },
        { name: "Orange", price: 100, id: 2 },
        { name: "Mango", price: 250, id: 3 }
    ];

    //var sorted = sortByName(products);
    //console.log(JSON.stringify(sorted, null, 4)); 
    //document.body.innerText = JSON.stringify(sorted, null, 4);

    function sortBy<T>(a: T[], keyOf: (item: T) => any): T[] {
        var result = a.slice(0);
        result.sort(function (x, y) {
            var kx = keyOf(x); // name, price, ...
            var ky = keyOf(y);
            return kx > ky ? 1 : kx < ky ? -1 : 0;
        });
        return result;
    }

    var sorted1 = sortBy(products, x => x.name); // x arrow, arrow function
    console.log(JSON.stringify(sorted1, null, 4));

    var sorted2 = sortBy(products, x => x.price); // x goes to x.price
    console.log(JSON.stringify(sorted2, null, 4));
}
