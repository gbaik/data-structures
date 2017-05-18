var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(Stack.stackMethods);
  obj.storage = {};   
  obj.size1 = 0; 
  obj.count = 0; 

  return obj;
};

Stack.stackMethods = {};

Stack.stackMethods.push = function (value) {
  this.count++;
  this.size1++;
  this.storage[count] = value;
};

Stack.stackMethods.pop = function () {
  var whatever = this.storage[count]; 
  this.count--;
  this.size1--;
  return whatever;
};

Stack.stackMethods.size = function () {
  return this.size1 < 0 ? 0 : this.size1;
};
