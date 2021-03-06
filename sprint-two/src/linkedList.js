var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  
  list.addToTail = function(value) {
    var newNode = Node(value);    
    if (list.head === null) {
      list.head = newNode;
    } 
    list.tail = newNode;
  };

  list.removeHead = function() {
    list.head = list.tail;
    return list.head.value;
  };

  list.contains = function(target) {
    if (list.head.value === target || list.tail.value === target) {
      return true;
    } else {
      return false;
    }
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

