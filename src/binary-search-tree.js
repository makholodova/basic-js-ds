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

  has(data) {
    return searchNode(this.rootNode, data)

    function searchNode(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      if (data < node.data) {
        return searchNode(node.left, data);
      } else {
        return searchNode(node.right, data);
      }
    }
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

  remove(data) {
    this.rootNode = removeNode(this.rootNode, data);

    function removeNode(node, data) {
      if (!node) return null;

      if (data > node.data) {
        node.right = removeNode(node.right, data);

        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;

      } else {
        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left
        }
        node.data = minFromRight.data;
        node.right = removeNode(node.right, minFromRight.data)

        return node;
      }
    }
  }

  min() {
    if (!this.rootNode) {
      return null;
    }
    let minNode = this.rootNode;

    while (minNode.left) {
      minNode = minNode.left
    }
    return minNode.data;
  }

  max() {
    if (!this.rootNode) return null;
    let maxNode = this.rootNode;
    while (maxNode.right) {
      maxNode = maxNode.right;
    }
    return maxNode.data;
  }
}

module.exports = {
  BinarySearchTree
};