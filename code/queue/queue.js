class Queue {
  constructor() {
    this.elements = []
  }

  enqueue(element) {
    this.elements.push(element)
    return this
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error('Queue is empty, nothing to dequeue')
    }
    return this.elements.shift()
  }

  isEmpty() {
    return this.size() === 0
  }

  front() {
    return this.elements[0]
  }

  size() {
    return this.elements.length
  }
}

module.exports = Queue
