class Node {
  constructor(data = null) {
    this.data = data
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.length = 0
  }

  size() {
    return this.length
  }

  enqueue(data) {
    let newNode = new Node(data)

    if (!this.first) {
      this.first = newNode
      this.last = newNode
    } else {
      let current = this.first
      this.last.next = newNode
      this.last = newNode
    }

    this.length++
    return this
  }

  dequeue() {
    if (!this.first) {
      throw new Error('Queue is empty, nothing to dequeue')
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
  Queue
}