class Stack {
  constructor() {
    this.elements = []
    this.count = 0
  }

  // Push
  push(element) {
    this.elements[this.count] = element
    this.count++
    return this.count - 1
  }

  // Pop
  pop() {
    if (this.isEmpty()) {
      // Underflow state
      throw new Error('Stack is empty, nothing to pop')
    }

    const deleteElement = this.elements[this.count - 1]
    this.count--
    return deleteElement
  }

  // Top most element
  peek() {
    return this.elements[this.count - 1]
  }

  // Check if Stack is empty
  isEmpty() {
    return this.size() === 0
  }

  size() {
    return this.count
  }
}

module.exports = Stack
