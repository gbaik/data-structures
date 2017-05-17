var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var count = 0;
  var zeroCount = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[count] = value;
    size++;
    count++;
  };

  someInstance.dequeue = function() {
    size--;
    var out = storage[zeroCount];
    zeroCount++;
    return out;
  };

  someInstance.size = function() {
    return size < 0 ? 0 : size;
  };

  return someInstance;
};
