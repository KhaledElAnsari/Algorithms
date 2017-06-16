var swap = require("../util/swap");

var insertion = function (right_arr) {
  var left_arr = [];
  left_arr.push(right_arr[0]);

  for (var i = 1; i < right_arr.length; i++) {
    var key = right_arr[i];
    left_arr.push(key);
    var j = i - 1;
    while (j >= 0 && left_arr[j] > key) {
      swap(left_arr, j, j + 1);
      j--;
    }
  }

  return left_arr;
};

module.exports = insertion;