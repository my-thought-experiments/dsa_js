const { Node, SinglyLinkedList } = require('../singlyLinkedList')

describe('DS :: Linked List :: Singly Linked List', () => {
  test('should test singly listed list node class', () => {
    let node1 = new Node(10)
    expect(node1.data).toBe(10)
    expect(node1.next).toBeNull()
  })

  test('should clear the singly linked list', () => {
    let list = new SinglyLinkedList()
    list.push(10)
    list.push(20)
    expect(list.size()).toBe(2)

    list.clear()
    expect(list.size()).toBe(0)
    expect(list.head).toBeNull()
    expect(list.tail).toBeNull()
  })

  test('should push element to singly listed list', () => {
    let list = new SinglyLinkedList()
    expect(list.head).toBeNull()
    expect(list.tail).toBeNull()

    list.push(10)
    expect(list.size()).toBe(1)
    expect(list.head.data).toBe(10)
    expect(list.head.next).toBeNull()
    expect(list.tail.data).toBe(10)
    expect(list.tail.next).toBeNull()

    list.push(20)
    expect(list.size()).toBe(2)
    expect(list.head.data).toBe(10)
    expect(list.head.next.data).toBe(20)
    expect(list.head.next.next).toBeNull()
    expect(list.tail.data).toBe(20)
    expect(list.tail.next).toBeNull()

    list.push(30)
    expect(list.size()).toBe(3)
    expect(list.head.data).toBe(10)
    expect(list.head.next.data).toBe(20)
    expect(list.head.next.next.data).toBe(30)
    expect(list.head.next.next.next).toBeNull()
    expect(list.tail.data).toBe(30)
    expect(list.tail.next).toBeNull()

    expect(list.print()).toEqual(expect.arrayContaining([10, 20, 30]))
  })

  test('should unshift (add element in the beginning) of the singly listed list', () => {
    let list = new SinglyLinkedList()
    expect(list.head).toBeNull()
    expect(list.tail).toBeNull()
    
    list.unshift(10)
    expect(list.size()).toBe(1)
    expect(list.head.data).toBe(10)
    expect(list.head.next).toBeNull()
    expect(list.tail.data).toBe(10)
    expect(list.tail.next).toBeNull()

    list.unshift(20)
    expect(list.size()).toBe(2)
    expect(list.head.data).toBe(20)
    expect(list.head.next.data).toBe(10)
    expect(list.head.next.next).toBeNull()
    expect(list.tail.data).toBe(10)
    expect(list.tail.next).toBeNull()

    list.unshift(30)
    expect(list.size()).toBe(3)
    expect(list.head.data).toBe(30)
    expect(list.head.next.data).toBe(20)
    expect(list.head.next.next.data).toBe(10)
    expect(list.head.next.next.next).toBeNull()
    expect(list.tail.data).toBe(10)
    expect(list.tail.next).toBeNull()

    expect(list.print()).toEqual(expect.arrayContaining([10, 20, 30]))
  })

  test('should insert (by position) into singly listed list', () => {
    let list = new SinglyLinkedList()
    
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

    expect(list.insert(list.size(), 50)).toBeTruthy() // Push
    expect(list.get(3).data).toBe(40)
    expect(list.get(3).next).not.toBeNull()
    expect(list.get(4).data).toBe(50)
    expect(list.get(4).next).toBeNull()

    expect(list.print()).toEqual(expect.arrayContaining([10, 20, 30, 40, 50]))
  })

  test('should pop (remove element from end) element from singly linked list', () => {
    let list = new SinglyLinkedList()
    list.push(10)
    list.push(20)
    list.push(30)
    list.push(40)
    list.push(50)
    expect(list.size()).toBe(5)

    const poppedElement = list.pop()
    expect(list.size()).toBe(4)
    expect(poppedElement.data).toBe(50)
    expect(list.head.data).toBe(10)
    expect(list.head.next).not.toBeNull()
    expect(list.tail.data).toBe(40)
    expect(list.tail.next).toBeNull()

    list.pop()
    list.pop()
    list.pop()
    list.pop()
    expect(list.size()).toBe(0)
    expect(list.head).toBeNull()
    expect(list.tail).toBeNull()
    
    try {
      list.pop()
    } catch(error) {
      expect(error).toBeInstanceOf(Error)
      expect(error).toHaveProperty('message', 'Nothing to pop');
    }
  })

  test('should shift (remove element from beginning) element from singly linked list', () => {
    let list = new SinglyLinkedList()
    list.push(10)
    list.push(20)
    list.push(30)
    list.push(40)
    list.push(50)
    expect(list.size()).toBe(5)

    list.shift()
    expect(list.size()).toBe(4)
    expect(list.head.data).toBe(20)
    expect(list.head.next).not.toBeNull()
    expect(list.tail.data).toBe(50)
    expect(list.tail.next).toBeNull()

    list.shift()
    list.shift()
    list.shift()
    list.shift()
    expect(list.size()).toBe(0)
    expect(list.head).toBeNull()
    expect(list.tail).toBeNull()
    
    try {
      list.shift()
    } catch(error) {
      expect(error).toBeInstanceOf(Error)
      expect(error).toHaveProperty('message', 'Nothing to shift');
    }
  })

  test('should remove element (by position) from singly linked list', () => {
    let list = new SinglyLinkedList()
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
    
    const element1 = list.remove(0)
    expect(list.size()).toBe(7)
    expect(element1.data).toBe(10)
    expect(element1.next).not.toBeNull()
    expect(list.tail.data).toBe(80)
    expect(list.tail.next).toBeNull()

    const element2 = list.remove(list.size() - 1) // remove last index
    expect(element2.data).toBe(80)
    expect(element2.next).toBeNull()
    expect(list.size()).toBe(6)
    expect(list.tail.data).toBe(70)
    expect(list.tail.next).toBeNull()

    const element3 = list.remove(3)
    expect(list.size()).toBe(5)
    expect(element3.data).toBe(50)
    expect(element3.next).not.toBeNull()
    expect(list.get(2).data).toBe(40)
    expect(list.get(2).next.data).toBe(60)
    expect(list.tail.data).toBe(70)
    expect(list.tail.next).toBeNull()
  })

  test('should get the node by position from singly listed list', () => {
    let list = new SinglyLinkedList()
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

  test('should set data into by position singly listed list set operation', () => {
    let list = new SinglyLinkedList()
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

  test('should reverse the singly linked list', () => {
    let list = new SinglyLinkedList()
    list.push(10)
    list.push(20)
    list.push(30)
    list.push(40)
    expect(list.print()).toEqual(expect.arrayContaining([10, 20, 30, 40]))

    list.reverse()
    expect(list.print()).toEqual(expect.arrayContaining([40, 30, 20, 10]))
  })
})
