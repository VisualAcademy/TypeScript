// TypeScriptImpliedType.txt
// Implied Type

var arr = [1, 2, 3];

// var a = arr[0];
// var b = arr[1];
// var c = arr[2];
var [a, b, c] = arr;

document.write(a + "<br />");
document.write(b + "<br />");
document.write(c + "<br />");

var [d, e, f] = ["string", 1234, true];
document.write(d + "<br />");
document.write(e + "<br />");
document.write(f + "<br />");
