var algorithms = (function () {

  var sorting = {
    insertion: require("./src/sorting/insertion.sort"),
    bubble: require("./src/sorting/bubble.sort"),
    selection: require("./src/sorting/selection.sort"),
    mergesort: require("./src/sorting/merge.sort"),
    quicksort: require("./src/sorting/quick.sort"),
  };

  return sorting;

})();

module.algorithms = algorithms;