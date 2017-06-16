var swap = require("../util/swap");

var bubble = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = arr.length; j >= (i + 1); j--) {
      if (arr[j] < arr[j - 1]) {
        swap(arr, j, j - 1);
      }
    }
  }

  return arr;
};

module.exports = bubble;