var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);
  obj.storage = {};   
  obj.size1 = 0; 
  obj.count = 0; 

  return obj;
};

var stackMethods = {};

stackMethods.push = function (value) {
  this.count++;
  this.size1++;
  this.storage[this.count] = value;
};

stackMethods.pop = function () {
  var poppedVal = this.storage[this.count]; 
  this.count--;
  this.size1--;
  return poppedVal;
};

stackMethods.size = function () {
  return this.size1 < 0 ? 0 : this.size1;
};
