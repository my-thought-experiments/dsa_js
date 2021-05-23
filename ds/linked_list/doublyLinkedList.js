class Node {
  constructor(data) {
    this.data = data
    this.prev = null
    this.next = null
  }
}

class DoublyLinkedList {
  constructor(head = null, tail = null) {
    this.head = head
    this.tail = tail
    this.length = 0
  }

  size() {
    return this.length
  }
  
  clear() {
    this.head = null
    this.tail = null
  }

  insert(data) {
    let newNode = new Node(data)
    if (this.head) {
      newNode.next = this.head
      this.head.prev = newNode
    }
    this.head = newNode
    this.length++
    return this.head
  }

  delete(data) {
    let temp = this.head
    let prev = null

    if(temp !== null && temp.data === data) {
      this.head = temp.next
      return
    }

    while (temp !== null && temp.data !== data) {
      prev = temp
      temp = temp.next
    }

    if (temp === null) return

    prev.next = temp.next

    this.length--
    return this.head
  }

  getLastNode() {
    let lastNode = this.head
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next
      }
    }
    return lastNode
  }

  getFirstNode() {
    return this.head
  }
}

module.exports = {
  Node,
  DoublyLinkedList
}
