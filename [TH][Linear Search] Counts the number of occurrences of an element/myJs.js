function count(arr, data) {
    var count = 0;
    var position = binSearch(arr, data);
    if (position > -1) {
        ++count;
        for (var i = position-1; i > 0; --i) {
            if (arr[i] == data) {
                ++count;
            } else {
                break;
            }
        }

        for (var i = position+1; i < arr.length; ++i) {
            if (arr[i] == data) {
                ++count;
            } else {
                break;
            }
        }
    } //end if
    return count;
}

function binSearch(arr, data) {
    var upperBound = arr.length-1;
    var lowerBound = 0;
    while (lowerBound <= upperBound) {
        var mid = Math.floor((upperBound + lowerBound) / 2);
        if (arr[mid] < data) {
            lowerBound = mid + 1;
        }
        else if (arr[mid] > data) {
            upperBound = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
} //end function

function dispArr(arr) {
    for (var i = 0; i < arr.length; ++i) {
        document.write(arr[i] + " ");
        if(i%10==9){
            document.write("<br>");
        }
    }
    if(i%10!=0){
        document.write("<br>");
    }
} //end function dispArr()

function swap(arr, index1, index2) {

    var temp = arr[index1];

    arr[index1] = arr[index2];

    arr[index2] = temp;

}

function selectionSort(arr) {
    var min, temp;
    for (var outer = 0; outer <= arr.length - 2; ++outer) {
        min = outer;
        for (var inner = outer + 1; inner <= arr.length - 1; ++inner) {
            if (arr[inner] < arr[min]) {
                min = inner;
            }
        }
        swap(arr, outer, min);
    }
}


var nums = [];
for(var i=0;i<100;++i){
    nums[i] = Math.floor(Math.random() * 101);
}
document.write("random number:" + nums + "<br>");

selectionSort(nums);
document.write("sorted :" + "<br>");
dispArr(nums);
document.write("<br>");


var val = parseInt(prompt("Enter a value to count: "));
var retVal = count(nums, val);
document.write("Found " + retVal + " occurrences of " + val + ".");






















