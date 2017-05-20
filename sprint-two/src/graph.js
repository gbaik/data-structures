// Instantiate a new graph
var Graph = function() { 
  this.nodeList = [];
  this.edge = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodeList.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var i = 0; i < this.nodeList.length; i++) {
    return this.nodeList[i] === node;
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  console.log(this.edge);
  for (var i = 0; i < this.nodeList.length; i++) {
    if (this.nodeList[i] === node) {
      delete this.nodeList[i];
      delete this.edge[node];
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return (this.edge[fromNode] && this.edge[toNode]) !== undefined;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edge[fromNode] = [toNode];
  this.edge[toNode] = [fromNode];
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.edge[toNode];
  delete this.edge[fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var i = 0; i < this.nodeList.length; i++) {
    cb(this.nodeList[i]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


