class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class SinglyLinkedList {
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

  insertFromEnd(data) {
    let newNode = new Node(data)

    if (!this.head) {
      // List is empty
      this.head = newNode
      this.tail = this.head
    } else {
      // List is not empty
      this.tail.next = newNode
      this.tail = newNode
    }
    
    this.length++
    return this
  }

  // Unshift
  insertFromFront(data) {
    let newNode = new Node(data)

    if (!this.head) {
      // List is empty
      this.head = newNode
      this.tail = this.head
    } else {
      // List is not empty
      newNode.next = this.head
      this.head = newNode
    }

    this.length++
    return this
  }

  insertByPosition(index, data) {
    if (index < 0 || index > this.length) {
      return false
    }

    if (index === this.length) {
      this.insertFromEnd(data)
      return true
    }

    if (index === 0) {
      this.insertFromFront(data)
      return true
    }

    let prev = this.get(index - 1)
    let newNode = new Node(data)

    let temp = prev.next
    prev.next = newNode
    newNode.next = temp
    
    this.length++
    return true
  }

  deleteFromFront() {
    if (!this.head) {
      throw Error('Queue is empty, nothing to delete')
    }

    const currentHead = this.head
    this.head = currentHead.next
    this.length--
    if (this.length === 0) {
      this.tail = null
    }
    return currentHead
  }

  // Shift
  deleteFromEnd() {
    if (!this.head) {
      throw Error('Queue is empty, nothing to delete')
    }
    let current = this.head
    let prev = current

    while(current.next) {
      prev = current
      current = current.next
    }

    this.tail = prev
    this.tail.next = null
    this.length--

    if (this.length === 0) {
      this.head = null
      this.tail = null
    }

    return current
  }

  deleteByPosition(index) {
    if (index < 0 || index >= this.length) {
      return false
    }

    if (index === 0) {
      return this.deleteFromEnd()
    }

    if (index === this.length - 1) {
      return this.deleteFromFront()
    }

    let prev = this.get(index - 1)
    let removed = prev.next
    prev.next = removed.next
    this.length--

    return removed
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null
    }

    let count = 0
    let currentHead = this.head

    while (count !== index) {
      currentHead = currentHead.next
      count++
    }

    return currentHead
  }

  set(index, newData) {
    if (index < 0) {
      return null
    }

    let foundNode = this.get(index)
    if (foundNode) {
      foundNode.data = newData
      return true
    }
    return false
  }

  reverse() {
    let node = this.head
    this.head = this.tail
    this.tail = node

    let next
    let prev = null

    for (let i = 0; i < this.length; i++) {
      next = node.next
      node.next = prev
      prev = node
      node = next
    }

    return this
  }

  print() {
    let arr = []
    let current = this.head

    while(current) {
      arr.push(current.data)
      current = current.next
    }

    return arr
  }
}

module.exports = {
  Node,
  SinglyLinkedList
}
