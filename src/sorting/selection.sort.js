var swap = require("../util/swap");

var selection = function (arr) {
  var len = arr.length,
    min_index;

  for (var i = 0; i < len; i++) {
    min_index = i;
    for (var j = i + 1; j < len; j++) {
      if (arr[j] < arr[min_index]) {
        min_index = j;
      }
    }

    swap(arr, i, min_index);
  }

  return arr;
};

module.exports = selection;