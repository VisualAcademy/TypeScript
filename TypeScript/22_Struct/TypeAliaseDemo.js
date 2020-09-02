// 형식 별칭
var TypeAliaseDemo;
(function (TypeAliaseDemo) {
    //let ts: TechType = "JavaScript"; // 에러 발생
    var ts = "TypeScript";
    console.log(ts);
    //let pt: PrimitiveType = new Date(); // 에러 발생
    var pt = Date.now();
    console.log(pt);
})(TypeAliaseDemo || (TypeAliaseDemo = {}));
//# sourceMappingURL=TypeAliaseDemo.js.map