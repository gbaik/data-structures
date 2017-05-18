var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.storage = {};  
  newQueue.count = 0;
  newQueue.sizeInt = 0;
  newQueue.zeroCount = 0;
  

  _.extend(newQueue, queueMethods);

  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function (value) { 
  this.storage[this.count] = value;
  this.count++;
  this.sizeInt++;
};

queueMethods.dequeue = function () {
  this.sizeInt--;
  var dequeueVal = this.storage[this.zeroCount]; 
  this.zeroCount++;
  return dequeueVal;
};

queueMethods.size = function () {
  return this.sizeInt < 0 ? 0 : this.sizeInt;
};






