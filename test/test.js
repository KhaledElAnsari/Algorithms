var createSample = function (times) {
  var unsortedArr = [];
  for (var i = 0; i < times; i++) {
    unsortedArr.push(Math.round(Math.random() * times));
  }

  return unsortedArr;
};