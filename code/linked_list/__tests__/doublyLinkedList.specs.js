const { Node, DoublyLinkedList } = require('../doublyLinkedList')

describe('LinkedList > Doubly Linked List', () => {
  test('should test doubly listed list node class', () => {
    let node1 = new Node(10)
    expect(node1.data).toBe(10)
    expect(node1.next).toBeNull()
    expect(node1.prev).toBeNull()
  })

  test('should clear the doubly linked list', () => {
    let list = new DoublyLinkedList()
    list.push(10)
    list.push(20)
    expect(list.size()).toBe(2)

    list.clear()
    expect(list.size()).toBe(0)
    expect(list.head).toBeNull()
    expect(list.tail).toBeNull()
  })

  test('should push element to doubly listed list', () => {
    let list = new DoublyLinkedList()
    expect(list.head).toBeNull()
    expect(list.tail).toBeNull()

    list.push(10)
    expect(list.size()).toBe(1)
    expect(list.head.data).toBe(10)
    expect(list.head.next).toBeNull()
    expect(list.head.prev).toBeNull()
    expect(list.tail.data).toBe(10)
    expect(list.tail.next).toBeNull()
    expect(list.tail.prev).toBeNull()

    list.push(20)
    expect(list.size()).toBe(2)
    expect(list.head.data).toBe(10)
    expect(list.head.next.data).toBe(20)
    expect(list.head.next.next).toBeNull()
    expect(list.head.prev).toBeNull()
    expect(list.tail.data).toBe(20)
    expect(list.tail.next).toBeNull()
    expect(list.tail.prev.data).toBe(10)

    list.push(30)
    expect(list.size()).toBe(3)
    expect(list.head.data).toBe(10)
    expect(list.head.next.data).toBe(20)
    expect(list.head.next.prev.data).toBe(10)
    expect(list.head.next.next.data).toBe(30)
    expect(list.head.next.next.next).toBeNull()
    expect(list.head.next.next.prev.data).toBe(20)
    expect(list.tail.data).toBe(30)
    expect(list.tail.next).toBeNull()
    expect(list.tail.prev.data).toBe(20)
  })

  test('should pop (remove element from end) element from doubly linked list', () => {
    let list = new DoublyLinkedList()
    list.push(10)
    list.push(20)
    list.push(30)
    list.push(40)
    list.push(50)
    expect(list.size()).toBe(5)

    const element = list.pop()
    expect(list.size()).toBe(4)
    expect(element.data).toBe(50)
    expect(element.next).toBeNull()
    expect(element.prev).toBeNull()
    expect(list.tail.data).toBe(40)
    expect(list.tail.next).toBeNull()
    expect(list.tail.prev).not.toBeNull()

    list.pop()
    list.pop()
    list.pop()

    expect(list.size()).toBe(1)
    expect(list.head.data).toBe(10)
    expect(list.head.next).toBeNull()
    expect(list.head.prev).toBeNull()
    expect(list.tail.next).toBeNull()
    expect(list.tail.prev).toBeNull()

    try {
      list.pop()
      list.pop()
    } catch(error) {
      expect(error).toBeInstanceOf(Error)
      expect(error).toHaveProperty('message', 'Nothing to pop');
    }
  })

  test('should shift (remove element from beginning) element from doubly linked list', () => {
    let list = new DoublyLinkedList()
    list.push(10)
    list.push(20)
    list.push(30)
    list.push(40)
    list.push(50)
    expect(list.size()).toBe(5)

    const element = list.shift()
    expect(list.size()).toBe(4)
    expect(element.data).toBe(10)
    expect(element.next).toBeNull()
    expect(element.prev).toBeNull()
    expect(list.head.data).toBe(20)
    expect(list.head.next).not.toBeNull()
    expect(list.head.prev).toBeNull()

    list.shift()
    list.shift()
    list.shift()
    expect(list.size()).toBe(1)
    expect(list.head.data).toBe(50)
    expect(list.head.next).toBeNull()
    expect(list.head.prev).toBeNull()
    expect(list.tail.next).toBeNull()
    expect(list.tail.prev).toBeNull()
    
    try {
      list.shift()
      list.shift()
    } catch(error) {
      expect(error).toBeInstanceOf(Error)
      expect(error).toHaveProperty('message', 'Nothing to shift');
    }
  })

  test('should unshift (add element in the beginning) of the doubly listed list', () => {
    let list = new DoublyLinkedList()
    expect(list.head).toBeNull()
    expect(list.tail).toBeNull()
    
    list.unshift(10)
    expect(list.size()).toBe(1)
    expect(list.head.data).toBe(10)
    expect(list.head.next).toBeNull()
    expect(list.head.prev).toBeNull()
    expect(list.tail.data).toBe(10)
    expect(list.tail.next).toBeNull()
    expect(list.tail.prev).toBeNull()

    list.unshift(20)
    expect(list.size()).toBe(2)
    expect(list.head.data).toBe(20)
    expect(list.head.prev).toBeNull()
    expect(list.head.next.data).toBe(10)
    expect(list.head.next.next).toBeNull()

    list.unshift(30)
    expect(list.size()).toBe(3)
    expect(list.head.data).toBe(30)
    expect(list.head.next.data).toBe(20)
    expect(list.head.prev).toBeNull()
  })

  test('should insert (by position) into doubly listed list', () => {
    let list = new DoublyLinkedList()
    
    expect(list.insert(-1, 10)).toBeFalsy()
    expect(list.insert(10, 10)).toBeFalsy()

    expect(list.insert(0, 10)).toBeTruthy() // Unshift

    expect(list.insert(1, 20)).toBeTruthy()
    expect(list.insert(2, 30)).toBeTruthy()
    expect(list.insert(3, 40)).toBeTruthy()

    expect(list.size()).toBe(4)
    expect(list.get(2).data).toBe(30)
    expect(list.get(3).data).toBe(40)
    expect(list.get(3).next).toBeNull()
    expect(list.get(3).prev).not.toBeNull()
    expect(list.get(3).prev.data).toBe(30)

    expect(list.insert(list.size(), 50)).toBeTruthy() // Push
    expect(list.get(3).data).toBe(40)
    expect(list.get(3).next).not.toBeNull()
    expect(list.get(4).data).toBe(50)
    expect(list.get(4).next).toBeNull()
    expect(list.get(4).prev).not.toBeNull()
  })

  test('should remove element (by position) from doubly linked list', () => {
    let list = new DoublyLinkedList()
    list.push(10)
    list.push(20)
    list.push(30)
    list.push(40)
    list.push(50)
    list.push(60)
    list.push(70)
    list.push(80)
    expect(list.size()).toBe(8)

    expect(list.remove(-1)).toBeFalsy()
    expect(list.remove(10)).toBeFalsy()
    expect(list.remove(list.size())).toBeFalsy()
    
    const element = list.remove(3)
    expect(list.size()).toBe(7)
    expect(element.data).toBe(30)
    expect(element.next).toBeNull()
    expect(element.prev).toBeNull()
  })

  test('should get the node by position from doubly listed list', () => {
    let list = new DoublyLinkedList()
    list.push(10)
    list.push(20)
    list.push(30)
    list.push(40)
    list.push(50)
    
    expect(list.get(-1)).toBeFalsy()
    expect(list.get(10)).toBeFalsy()
    expect(list.get(5)).toBeFalsy()

    const getList = list.get(2)
    expect(getList.data).toBe(30)
    expect(getList.next.data).toBe(40)
    expect(getList.next.next.data).toBe(50)
    expect(getList.next.next.next).toBeNull()
  })

  test('should set data into by position doubly listed list set operation', () => {
    let list = new DoublyLinkedList()
    list.push(10)
    list.push(20)
    list.push(30)
    list.push(40)
    list.push(50)
    
    expect(list.get(-1)).toBeFalsy()
    expect(list.get(10)).toBeFalsy()

    expect(list.get(2).data).toBe(30)
    list.set(2, 100)
    expect(list.get(2).data).not.toBe(30)
    expect(list.get(2).data).toBe(100)
  })

})
