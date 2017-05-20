var BinarySearchTree = function(value) {
var obj = Object.create(stackMethods);
  obj.left = {}; //a BST where all the values are lower than its current value (num)
  obj.right = {}; //a BST where all the values are higher than its current value (num)

  return obj;
};

var stackMethods = {};

stackMethods.insert = function (value) {
  //accepts a value (the argument)
  //places it in the tree in the correct position
};

stackMethods.contains = function (value) {
  //accepts a value (the argument)
  //return whether or not the value is contained in the tree (boolean)
};

stackMethods.depthFirstLog = function (callback) {
  //accepts a callback (the argument)
  //executes it on very value in the tree
};



/*
 * Complexity: What is the time complexity of the above functions?
 */