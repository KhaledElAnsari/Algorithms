var swap = require("../util/swap");

var quicksort = function(arr) {
  /**
   * This is one of the Divide and Conquer algorithms
   */
  var start_index = 0;
  var end_index = arr.length - 1;
  var pivot = arr[end_index];
  var i = start_index - 1;

  if (start_index < end_index) {
    pivot = partition(arr, start_index, end_index);

    quicksort(arr, start_index, pivot - 1);
    quicksort(arr, pivot + 1, end_index);
  }

  return arr;
};

// Private function, will be used by the QuickSort
var partition = function(array, start_index, end_index) {
  var pivot = array[start_index];
  var left = start_index + 1;
  var right = end_index;

  for (var j = start_index; j < end_index; j++) {
    if (array[j] < pivot) {
      i++;
      swap(array, i, j);
    }
  }

  swap(array, i + 1, end_index);

  return i + 1;
};

module.exports = quicksort;