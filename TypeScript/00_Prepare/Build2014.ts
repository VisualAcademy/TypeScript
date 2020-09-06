interface Entity {
    name: string;
    price: number;
}

function sortByName<T extends Entity>(a: T[]) {
    var result = a.slice(0);
    result.sort(function (x, y) {
        var name = "red";
        return x.name.localeCompare(y.name); 
    });
    return result; 
}

function sortBy<T>(a: T[], keyOf: (item: T) => any): T[] {
    var result = a.slice(0);
    result.sort(function (x, y) {
        var kx = keyOf(x);
        var ky = keyOf(y);
        return kx > ky ? 1 : kx < ky ? -1 : 0; 
    }); 
    return result; 
}

var products = [
    { name: "A", price: 100, id:101 },
    { name: "B", price: 100, id:102 },
    { name: "C", price: 100, id:103 },
];

var sorted = sortByName(products);
document.body.innerText = JSON.stringify(sorted, null, 4);

var sorted2 = sortBy(products, p => p.name);
document.body.innerText = JSON.stringify(sorted2, null, 4);



class Point
{
    private color: string;
    constructor(public x: number = 0, public y: number = 0) {
        this.x = x;
        this.y = y;
        this.color = "red";
    }
    dist() { return Math.sqrt(this.x * this.x + this.y + this.y); }
    static oright = new Point(0, 0); 
}

var p = new Point();
p.x = 10;
p.y = 20;



var p = new Point(10, 20);
p.x = 10;
p.y = 20;

class Point3D extends Point {
    constructor(x: number, y: number, public z: number) {
        super(x, y); 
    }
}


var p = new Point();
p.x = 10;
p.y = 20;


module Utils {
    export class Point {
        private color: string;
        constructor(public x: number = 0, public y: number = 0) {
            this.color = "red";
        }
        dist() { return Math.sqrt(this.x * this.x + this.y + this.y); }
        static oright = new Point(0, 0);
    }
}

var pt = new Utils.Point(10, 20);
