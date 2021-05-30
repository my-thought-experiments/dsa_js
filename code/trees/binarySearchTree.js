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
    if (this.root === null) {
      return false
    }

    let current = this.root
    let found = false

    while(current && !found) {
      if (data < current.data) {
        current = current.left
      } else if (data > current.data) {
        current = current.right
      } else {
        return true
      }
    }

    return false
  }

  breadthFirstSearch() {
    let visited = []
    let queue = []
    let node = this.root

    queue.push(node)

    while(queue.length) {
      node = queue.shift()
      visited.push(node.data)

      if (node.left) {
        queue.push(node.left)
      }

      if (node.right) {
        queue.push(node.right)
      }
    }

    return visited
  }

  depthFirstSearchPreOrder() {
    let visited = []
    
    function traverse(node) {
      visited.push(node.data)

      if (node.left) {
        traverse(node.left)
      }

      if (node.right) {
        traverse(node.right)
      }
    }

    traverse(this.root)

    return visited
  }

  depthFirstSearchPostOrder() {
    let visited = []

    function traverse(node) {
      if (node.left) {
        traverse(node.left)
      }

      if (node.right) {
        traverse(node.right)
      }

      visited.push(node.data)
    }

    traverse(this.root)

    return visited
  }

  depthFirstSearchInOrder() {
    let visited = []

    function traverse(node) {
      if (node.left) {
        traverse(node.left)
      }

      visited.push(node.data)

      if (node.right) {
        traverse(node.right)
      }
    }

    traverse(this.root)

    return visited
  }
}

module.exports = {
  Node,
  BinarySearchTree
}
