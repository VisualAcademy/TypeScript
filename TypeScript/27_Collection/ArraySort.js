var ArraySort;
(function (ArraySort) {
    var arr = [3, 2, 1, 4, 5];
    var sortedArray = arr.sort(); // 오름차순 정렬: 1, 2, 3 순서
    console.log(sortedArray);
    for (var _i = 0, sortedArray_1 = sortedArray; _i < sortedArray_1.length; _i++) {
        var item = sortedArray_1[_i];
        console.log(item);
    }
})(ArraySort || (ArraySort = {}));
