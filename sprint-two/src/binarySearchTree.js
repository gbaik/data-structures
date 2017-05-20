var BinarySearchTree = function(value) {
  var newTree = Object.create(binarySearchTree);
  newTree.root = value;
  newTree.left = {}; //a BST where all the values are lower than its current value (num)
  newTree.right = {}; //a BST where all the values are higher than its current value (num)

  return newTree;
};

var binarySearchTree = {};

binarySearchTree.insert = function (value) {
  //accepts a value (the argument)
  //places it in the binarySearchTree in the correct position
  debugger;
  console.log('Left tree: ', this.left);

  var childTree = BinarySearchTree(value);  
  
  if (this.root > value) {
    if (this.left.length === 0) {
      this.left.push(value);
    } else {
      this.left.0.push(childTree);
    }
  } else if (this.root < value) {
    if (this.right.length === 0) {
      this.right = value;
    } else {
      this.right.push(childTree);
    }
  } 
  console.log('Top tree: ', this);
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