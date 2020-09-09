var ReplaceAll;
(function (ReplaceAll) {
    var origin = "안녕하세요. 안녕하세요.\n안녕하세요.";
    var result = "";
    result = origin.replace("안녕", "Hi");
    console.log(result);
    result = origin.replace(/안녕/, "Hi");
    console.log(result);
    result = origin.replace(/안녕/g, "Hi");
    console.log(result);
})(ReplaceAll || (ReplaceAll = {}));
