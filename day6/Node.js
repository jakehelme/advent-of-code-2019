function Node(name) {
  this.name = name;
  this.parent = null;
  this.children = [];
}

module.exports = Node;