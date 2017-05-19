var BinarySearchTree = function(value) {
  var someInstance = {};
  someInstance.array = [];
  someInstance.start = someInstance.start || 0;
  someInstance.end = someInstance.end || someInstance.array.length - 1;  
  someInstance.midpoint = Math.floor((someInstance.end + someInstance.start) / 2);
//A .left property, a binary search tree (BST) where all values are lower than than it the current value.

  someInstance.left = function (whatever) {
    if (storedobject = undefined) {
      store whatever as the first object
    } else {
      whatever > storedobject['whatever' - 1]
    }
  }
  someInstance.right = someInstance.array.slice(someInstance.midpoint, someInstance.end);
  
  _.extend(someInstance, binaryMethods);
  
  return someInstance;
};
  
var binaryMethods = {};

binaryMethods.insert = function (insertValue) {
  this.left(insertValue);
};

binaryMethods.contains = function (target) {
  if (this.midpoint === target) {
    return this.midpoint;
  } else if (this.array[this.midpoint + 1] - target > this.array[this.midpoint - 1] - target) {
    this.start = this.midpoint; 
    contains(target);
  } else { 
    this.end = this.midpoint;
    contains(target);
  }
};

binaryMethods.depthFirstLog = function () {
  
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

