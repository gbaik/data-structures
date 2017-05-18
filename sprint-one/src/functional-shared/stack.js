var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  newStack.count = 0;
  newStack.size1 = 0;
  newStack.storage = {};

  _.extend(newStack, stackMethods);

  return newStack;
};

stackMethods = {};


stackMethods.push = function (value) { 
  this.count++;
  this.size1++;
  this.storage[this.count] = value;
};

stackMethods.pop = function () {
  var whatever = this.storage[this.count]; 
  this.count--;
  this.size1--;
  return whatever;
};

stackMethods.size = function () {
  return this.size1 < 0 ? 0 : this.size1;
};

// Stack.methods = {
//   push : function (value) {
//     this.count++;
//     this.size1++;
//     this.storage[count] = value;
//   },
//   pop : function () {
//     var whatever = this.storage[count]; 
//     this.count--;
//     this.size1--;
//     return whatever;
//   },    
//   size : function () {
//     return this.size1 < 0 ? 0 : this.size1;
//   }
// };


// var push = function (value) {
//   count++;
//   size++;
//   storage[count] = value;
// };

// var pop = function () {
//   var whatever = storage[count]; 
//   count--;
//   size--;
//   return whatever;
// };

// var size = function () {
//   return size < 0 ? 0 : size;
// };



