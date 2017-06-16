var mergesort = function (arr) {
  /**
   * This is one of the Divide and Conquer algorithms
   */
  var start_index = 0;
  var end_index = arr.length;
  var mid = Math.floor((start_index + end_index) / 2);

  if (mid < 1) return arr;
  var left_side = mergesort(arr.slice(start_index, mid));
  var right_side = mergesort(arr.slice(mid, end_index));

  return merge(left_side, right_side);
};

// Private function, will be used by the MergeSort
var merge = function(left, right) {
  var result = [];

  var sorted_element;
  while (left.length || right.length) {

    if (left.length && right.length) {
      if (left[0] < right[0]) {
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
};

module.exports = mergesort;