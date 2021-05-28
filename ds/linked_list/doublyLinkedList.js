class Node {
  constructor(data) {
    this.data = data
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  size() {
    return this.length
  }
  
  clear() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(data) {
    let newNode = new Node(data)

    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }

    this.length++

    return this
  }

  pop() {
    if (!this.head) {
      throw Error('Nothing to pop')
    }

    let current = this.tail

    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.tail = current.prev
      this.tail.next = null
      current.prev = null
    }

    this.length--
    return current
  }

  // Remove a node from the beginning
  shift() {
    if (!this.head) {
      throw Error('Nothing to shift')
    }

    const current = this.head

    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = current.next
      this.head.prev = null
      current.next = null
    }

    this.length--
    return current
  }

  // Add new node in the beginning
  unshift(data) {
    let newNode = new Node(data)

    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.head.prev = newNode
      newNode.next = this.head
      this.head = newNode
    }

    this.length++
    return this
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return false
    }

    let current

    if (index <= this.length / 2) {
      let count = 0
      current = this.head
  
      while(count !== index) {
        current = current.next
        count++
      }
    } else {
      let count = this.length - 1
      current = this.tail

      while(count !== index) {
        current = current.prev
        count--
      }
    }

    return current
  }

  set(index, data) {
    let foundNode = this.get(index)
    if (foundNode) {
      foundNode.data = data
      return true
    }
    return false
  }

  insert(index, data) {
    if (index < 0 || index > this.length) {
      return false
    }

    if (index === 0) {
      this.unshift(data)
      return true
    }

    if (index === this.length) {
      this.push(data)
      return true
    }

    let beforeNode = this.get(index - 1)
    let newNode = new Node(data)

    let afterNode = beforeNode.next
    beforeNode.next = newNode
    newNode.prev = beforeNode
    newNode.next = afterNode
    afterNode.prev = newNode
    
    this.length++
    return true
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return false
    }

    if (index === 0) {
      return this.shift()
    }

    if (index === this.length - 1) {
      return this.pop()
    }

    let removeNode = this.get(index - 1)
    let beforeNode = removeNode.prev
    let afterNode = removeNode.next
    beforeNode.next = afterNode
    afterNode.prev = beforeNode
    removeNode.next = null
    removeNode.prev = null

    this.length--
    return removeNode
  }
}

module.exports = {
  Node,
  DoublyLinkedList
}
