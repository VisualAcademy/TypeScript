var OptionalParameter;
(function (OptionalParameter) {
    // Optional Parameter: 변수명 뒤에 ? 붙임
    function getData(num) {
        if (num !== undefined) {
            return num;
        }
        return 1234;
    }
    console.log(getData()); // 1234
    console.log(getData(2345)); // 2345
})(OptionalParameter || (OptionalParameter = {}));
//# sourceMappingURL=OptionalParameter.js.map