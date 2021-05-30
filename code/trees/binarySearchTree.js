class Node {
  constructor(data = null) {
    this.data = data
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(data) {
    let newNode = new Node(data)

    if (!this.root) {
      // Empty tree
      this.root = newNode
    } else {
      // Non-Empty tree
      let current = this.root
      while (true) {
        if (newNode.data === current.data) {
          throw Error('Found duplicate value')
        }

        if (newNode.data < current.data) {
          if (current.left === null) {
            current.left = newNode
            return this
          }
          current = current.left
        } else {
          if (current.right === null) {
            current.right = newNode
            return this
          }
          current = current.right
        }
      }
    }

    return this
  }

  find(data) {

  }
}

module.exports = {
  Node,
  BinarySearchTree
}
