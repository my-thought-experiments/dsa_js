class Node {
  constructor(data = null) {
    this.data = data
    this.next = null
  }
}

class Stack {
  constructor() {
    this.first = null
    this.last = null
    this.length = 0
  }

  size() {
    return this.length
  }

  push(data) {
    let newNode = new Node(data)

    if (this.length === 0) {
      this.first = newNode
      this.last = newNode
    } else {
      let current = this.first
      this.first = newNode
      this.first.next = current
    }

    this.length++
    return this
  }

  pop() {
    if (this.length === 0) {
      throw new Error('Stack is empty, nothing to pop')
    }

    let current = this.first
    if (this.first === this.last) {
      this.last = null
    }

    this.first = this.first.next
    this.length--
    return current
  }
}

module.exports = {
  Node,
  Stack
}
