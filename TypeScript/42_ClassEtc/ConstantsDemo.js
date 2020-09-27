var Constants;
(function (Constants) {
    var Youtube = /** @class */ (function () {
        function Youtube() {
        }
        Object.defineProperty(Youtube, "SITE_URL", {
            get: function () {
                return "https://youtube.com/c/VisualAcademy";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Youtube, "START_YEAR", {
            get: function () { return 2010; },
            enumerable: true,
            configurable: true
        });
        return Youtube;
    }());
    Constants.Youtube = Youtube;
    var Blog = /** @class */ (function () {
        function Blog() {
        }
        Object.defineProperty(Blog, "SITE_URL", {
            get: function () {
                return "https://www.dotnetkorea.com";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Blog, "START_YEAR", {
            get: function () { return 2000; },
            enumerable: true,
            configurable: true
        });
        return Blog;
    }());
    Constants.Blog = Blog;
})(Constants || (Constants = {}));
console.log(Constants.Youtube.START_YEAR + " - " + Constants.Youtube.SITE_URL);
console.log(Constants.Blog.START_YEAR + " - " + Constants.Blog.SITE_URL);
