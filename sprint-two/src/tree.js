var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var childTree = Tree(value);  
  this.children.push(childTree);
};

treeMethods.contains = function(target) {
  debugger
  if (this.children === target) {
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      this.children[i].contains;
    }
    return false;
  }
  // if (this.value === target) {
  //   return true;
  // } else {
  //   childValue(target, this.children);
  // }

  // function childValue (target, familyTree) {
  //   if (familyTree.length !== undefined) {
  //     for (var i = 0; i < familyTree.length; i++) {
  //       childValue(target, familyTree.children[i]);
  //     }
  //   }
  //   return false;
  // };
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
