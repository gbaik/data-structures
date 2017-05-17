var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    count++;
    size++;
    storage[count] = value;
  };

  someInstance.pop = function() {
    var popped = storage[count];
    count--;
    size--;
    return popped;
  };

  someInstance.size = function() {
    return size < 0 ? 0 : size;
  };
  
  
  return someInstance;
};
