const {NotImplementedError} = require('../extensions/index.js');
const {Node} = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = new Node(data);
    this.rootNode = addValue(this.rootNode, data)

    function addValue(node, data) {
      if (!node) {
        return newNode;
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        node.left = addValue(node.left, data);
      } else {
        node.right = addValue(node.right, data);
      }
      return node;
    }
  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(data) {
    return findNode(this.rootNode, data);

    function findNode(node, data) {
      if (!node) return null;
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        return  findNode(node.left, data);
      } else {
        return findNode(node.right, data);
      }
    }
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};