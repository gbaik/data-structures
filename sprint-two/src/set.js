var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; 
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  //takes a string and adds to the set
  this._storage.push(item);
};

setPrototype.contains = function(item) {
  //takes a string and returns a boolean if it is found in the set
  for (var i = 0; i < this._storage.length; i++) {
    if (this._storage[i] === item) {
      return true;
    } 
  }
  return false;
};

setPrototype.remove = function(item) {
  //takes a string and removes it from the set
  for (var i = 0; i < this._storage.length; i++) {
    if (this._storage[i] === item) {
      delete this._storage[i];
    } 
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
