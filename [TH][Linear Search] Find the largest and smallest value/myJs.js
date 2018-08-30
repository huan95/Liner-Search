var findMin = function (arr) {

    var min = arr[0];
    for (var i = 1; i < arr.length; ++i) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
};

var findMax = function (arr) {

    var max = arr[0];
    for (var i = 1; i < arr.length; ++i) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
};

var nums = [];
for (var i = 0; i < 100; ++i) {
    nums[i] = Math.floor(Math.random() * 100);
}

var minValue = findMin(nums);
document.write("The minimum value is :" + minValue);
document.write("<br>");

var maxValue = findMax(nums);
document.write("The maximum value is :" + maxValue);


