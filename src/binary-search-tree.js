const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
    
  }

  root() {
    // throw new NotImplementedError('Not implemented');
    return this.rootNode;
  }

  add( data ) {
    // throw new NotImplementedError('Not implemented');
    this.rootNode = addWithin(this.rootNode, data);
    function addWithin(node, data) {
      if(!node) {
        return new Node(data);
      }
      if(node.data === data) {
        return node.data;
      }
      if(data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }
      return node;
    }
  }

  has( data ) {
    // throw new NotImplementedError('Not implemented');
    function searchWithin(node, data) {
      if(!node) {
        return false;
      }
      if(node.data === data) {
        return true;
      }
      if(node.data > data) {
        return searchWithin(node.left, data)
      } else {
        return searchWithin(node.right, data)
      }
    }
    return searchWithin(this.rootNode, data)

  }

  find( data ) {
    // throw new NotImplementedError('Not implemented');
    let node = this.rootNode
    while (node !== null) {
      if(node.data === data) {
        return node;
      } else  if(node.data < data) {
        node = node.right;
      } else if(node.data > data) {
        node = node.left;
      } 
    }
    return null;
  }

  remove( data ) {
    // throw new NotImplementedError('Not implemented');
    this.rootNode = removeNode(this.rootNode, data);
    function removeNode(node, data) {
      if(!node) {
        return null;
      }
      if(node.data > data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if(node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if(!node.left && !node.right) {
          return null;
        }
        if(!node.left) {
          node = node.right;
          return node;
        }
        if(!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;
        node.right = removeNode(node.right, minFromRight.data);

        return node;

      }
    }
    return removeNode(this.rootNode, data);
  }

  min() {
    // throw new NotImplementedError('Not implemented');
    if(!this.rootNode) {
      return;
    }

    let node = this.rootNode;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    // throw new NotImplementedError('Not implemented');
    if(!this.rootNode) {
      return;
    }

    let node = this.rootNode;
    while (node.right) {
      node = node.right;
    }

    return node.data
  }
}

module.exports = {
  BinarySearchTree
};