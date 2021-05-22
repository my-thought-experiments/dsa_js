class Queue {
  constructor() {
    this.elements = []
  }

  enqueue(element) {
    this.elements.push(element)
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error('Queue is empty, no element to dequeue')
    }
    return this.elements.shift()
  }

  isEmpty() {
    return this.elements.length === 0
  }
  front() {
    return this.elements[0]
  }

  size() {
    return this.elements.length
  }
}

module.exports = Queue
