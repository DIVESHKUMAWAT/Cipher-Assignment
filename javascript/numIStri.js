function contains(arr, element) {
    for (var i = 0; i < arr.length; i++) {

        if (arr[i] === element) {

            return true;
        }
    }

    return false;
}

arr = ["1a","a","2b","b"];
console.log(contains(arr, "1"));
