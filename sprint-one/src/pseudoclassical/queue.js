var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style. 
  this.storage = {};  
  this.count = 0;
  this.sizeInt = 0;
  this.zeroCount = 0;
};


Queue.prototype.enqueue = function (value) { 
  this.storage[this.count] = value;
  this.count++;
  this.sizeInt++;
};

Queue.prototype.dequeue = function () {
  this.sizeInt--;
  var dequeueVal = this.storage[this.zeroCount]; 
  this.zeroCount++;
  return dequeueVal;
};

Queue.prototype.size = function () {
  return this.sizeInt < 0 ? 0 : this.sizeInt;
};




