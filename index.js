var algorithms = (function() {
    var insertion = function(right_arr) {
        var left_arr = [];
        left_arr.push(right_arr[0]);

        for(var i = 1; i < right_arr.length; i++) {
            var key = right_arr[i];
            left_arr.push(key);
            var j = i - 1;
            while(j >= 0 && left_arr[j] > key) {
                var tmp = left_arr[j];
                left_arr[j] = left_arr[j+1];
                left_arr[j+1] = tmp;
                j--;
            }
        }

        return left_arr;
    };

    var bubble = function(array) {
        for(var i = 0; i < array.length; i++) {
            for(var j = array.length; j >= (i + 1); j--) {
                if(array[j] < array[j-1]) {
                    swap(array, j, j-1);
                }
            }
        }

        return array;
    };

    var selection = function(arr) {
        var len = arr.length,
            min_index;

        for(var i = 0; i < len; i++) {
            min_index = i;
            for(var j = i + 1; j < len; j++) {
                if(arr[j] < arr[min_index]) {
                    min_index = j;
                }
            }
            
            swap(arr, i, min_index);
        }

        return arr;
    };

    var mergesort = function(arr) {
        /**
         * This is one of the Divide and Conquer algorithms
         */
        var start_index = 0;
        var end_index = arr.length;
        var mid = Math.floor((start_index + end_index) / 2);

        if(mid < 1) return arr;
        var left_side = mergesort(arr.slice(start_index, mid));
        var right_side = mergesort(arr.slice(mid, end_index));
        
        return merge(left_side, right_side);
    };

    // Private function, will be used for the MergeSort
    function merge(left, right) {
        var result = [];

        var sorted_element;
        while(left.length || right.length) {
            
            if(left.length && right.length) {
                if(left[0] < right[0]) {
                    sorted_element = left.shift();
                    result.push(sorted_element);
                } else {
                    sorted_element = right.shift();
                    result.push(sorted_element);
                }
            } else if (left.length) {
                sorted_element = left.shift();
                result.push(sorted_element);
            } else {
                sorted_element = right.shift();
                result.push(sorted_element);
            }

        }

        return result;
    }

    var quicksort = function(arr) {
        /**
         * This is one of the Divide and Conquer algorithms
         */
        var start_index = 0;
        var end_index = arr.length - 1;
        var pivot = arr[end_index];
        var i = start_index - 1;

        if(start_index < end_index) {
            pivot = partition(arr, start_index, end_index);

            quicksort(arr, start_index, pivot-1);
            quicksort(arr, pivot+1, end_index);
        }

        return arr;
    };

    // Private function, will be used for the QuickSort
    function partition(array, start_index, end_index) {
        var pivot = array[start_index];
        var left  = start_index + 1;
        var right = end_index;

        for(var j = start_index; j < end_index; j++) {
            if(array[j] < pivot) {
                i++;
                swap(array, i, j);
            }
        }

        swap(array, i+1, end_index);

        return i+1;
    }

    // Private function, will be used by different algorithms
    function swap(array, indexA, indexB) {
        var tmp = array[indexA];
        array[indexA] = array[indexB];
        array[indexB] = tmp;
    }

    return {
      InsertionSort: insertion,
      BubbleSort: bubble,
      SelectionSort: selection,
      MergeSort: mergesort,
      QuickSort: quicksort
    };

})();

var unsortedArr = [];
var times = 12;
for(var i = 0; i < times; i++) {
    unsortedArr.push(Math.round(Math.random() * times));
}

// console.log(unsortedArr);
// console.log("Insertion Sort", algorithms.InsertionSort(unsortedArr));
// console.log("Bubble Sort", algorithms.BubbleSort(unsortedArr));
// console.log("Selection Sort", algorithms.SelectionSort(unsortedArr));
// console.log("Merge Sort", algorithms.MergeSort(unsortedArr));
// console.log("Quick Sort", algorithms.QuickSort(unsortedArr));