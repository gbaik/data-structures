var BinarySearchTree = function(value) {
  var newTree = Object.create(binarySearchTree);
  newTree.root = value;
  newTree.left = null; //a BST where all the values are lower than its current value (num)
  newTree.right = null; //a BST where all the values are higher than its current value (num)

  return newTree;
};

var binarySearchTree = {};

binarySearchTree.insert = function (value) {
  //accepts a value (the argument)
  //places it in the binarySearchTree in the correct position
  if (this.root > value) {
    if (this.left === null) {
      this.left = value;
    } else {
    this.left[0].insert(value);
}
  } else if (this.root < value) {
    if (this.right === null) {
      this.right = value;
    } else {
    this.right[0].insert(value);
}
  }
  
  console.log(this);
};

binarySearchTree.contains = function (value) {
  //accepts a value (the argument)
  //return whether or not the value is contained in the binarySearchTree (boolean)
};

binarySearchTree.depthFirstLog = function (callback) {
  //accepts a callback (the argument)
  //executes it on very value in the binarySearchTree
};



/*
 * Complexity: What is the time complexity of the above functions?
 */