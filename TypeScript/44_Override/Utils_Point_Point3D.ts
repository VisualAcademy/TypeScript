// Utils_Point_Point3D.ts
module DevLec.Utils {
    export class Point {
        //x: number;
        //y: number;	
        private color: string;
        constructor(public x: number = 0, public y: number = 0) {
            //this.x = x;
            //this.y = y; 
            this.color = "red";
        }
        dist() { return Math.sqrt(this.x * this.x + this.y * this.y); }
        static origin = new Point(0, 0);
    }
    export class Point3D extends Point {
        constructor(x: number, y: number, public z: number) {
            super(x, y);
        }
    }
}

//var p = new Point(10, 20);
//var p = new DevLec.Utils.Point();
//p.x = 10;
//p.y = 20;
//p.dist();
//Point.origin; // Shared, Static Member

var p3d = new DevLec.Utils.Point3D(10, 20, 30);