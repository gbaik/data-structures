var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};   
  this.size1 = 0; 
  this.count = 0; 
};

Stack.prototype.push = function (value) {
  this.count++;
  this.size1++;
  this.storage[this.count] = value;
};

Stack.prototype.pop = function () {
  var poppedVal = this.storage[this.count]; 
  this.count--;
  this.size1--;
  return poppedVal;
};

Stack.prototype.size = function () {
  return this.size1 < 0 ? 0 : this.size1;
};



