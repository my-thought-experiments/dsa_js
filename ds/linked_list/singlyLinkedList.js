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

  push(data) {
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

  
  pop() {
    if (!this.head) {
      throw Error('Nothing to pop')
    }
    let current = this.head
    let newTail = current

    while(current.next) {
      newTail = current
      current = current.next
    }

    this.tail = newTail
    this.tail.next = null
    this.length--

    if (this.length === 0) {
      this.head = null
      this.tail = null
    }

    return current
  }

  // Remove element from beginning of the Linked list
  shift() { // Shift -> deleteFromFront
    if (!this.head) {
      throw Error('Nothing to shift')
    }

    const current = this.head
    this.head = current.next
    this.length--

    if (this.length === 0) {
      this.tail = null
    }

    return current
  }

  // Add new node to beginning
  unshift(data) {
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

  get(index) {
    if (index < 0 || index >= this.length) {
      return false
    }

    let count = 0
    let current = this.head

    while (count !== index) {
      current = current.next
      count++
    }

    return current
  }

  insert(index, data) {
    if (index < 0 || index > this.length) {
      return false
    }

    if (index === this.length) {
      this.push(data)
      return true
    }

    if (index === 0) {
      this.unshift(data)
      return true
    }

    let prevNode = this.get(index - 1)
    let newNode = new Node(data)

    let temp = prevNode.next
    prevNode.next = newNode
    newNode.next = temp
    
    this.length++
    return true
  }

  // Remove a node from specific position
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

    let prev = this.get(index - 1)
    let removed = prev.next
    prev.next = removed.next
    this.length--

    return removed
  }

  // edit data by position
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
