var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  newStack.count = 0;
  newStack.sizeInt = 0;
  newStack.storage = {};

  _.extend(newStack, stackMethods);

  return newStack;
};

stackMethods = {};


stackMethods.push = function (value) { 
  this.count++;
  this.sizeInt++;
  this.storage[this.count] = value;
};

stackMethods.pop = function () {
  var whatever = this.storage[this.count]; 
  this.count--;
  this.sizeInt--;
  return whatever;
};

stackMethods.size = function () {
  return this.sizeInt < 0 ? 0 : this.sizeInt;
};
