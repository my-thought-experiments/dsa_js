const { Node, SinglyLinkedList } = require('../singlyLinkedList')

describe('DS :: Linked List :: Singly Linked List', () => {
  test('should test singly listed list node class', () => {
    let node1 = new Node(10)
    expect(node1.data).toBe(10)
    expect(node1.next).toBeNull()
  })

  test('should test singly listed list insert operation from end', () => {
    let list = new SinglyLinkedList()
    expect(list.head).toBeNull()
    expect(list.tail).toBeNull()

    list.insertFromEnd(10)
    expect(list.size()).toBe(1)
    expect(list.head.data).toBe(10)
    expect(list.head.next).toBeNull()
    expect(list.tail.data).toBe(10)
    expect(list.tail.next).toBeNull()

    list.insertFromEnd(20)
    expect(list.size()).toBe(2)
    expect(list.head.data).toBe(10)
    expect(list.head.next.data).toBe(20)
    expect(list.head.next.next).toBeNull()
    expect(list.tail.data).toBe(20)
    expect(list.tail.next).toBeNull()

    list.insertFromEnd(30)
    expect(list.size()).toBe(3)
    expect(list.head.data).toBe(10)
    expect(list.head.next.data).toBe(20)
    expect(list.head.next.next.data).toBe(30)
    expect(list.head.next.next.next).toBeNull()
    expect(list.tail.data).toBe(30)
    expect(list.tail.next).toBeNull()
  })

  test('should test singly listed list insert operation from front', () => {
    let list = new SinglyLinkedList()
    expect(list.head).toBeNull()
    expect(list.tail).toBeNull()
    
    list.insertFromFront(10)
    expect(list.size()).toBe(1)
    expect(list.head.data).toBe(10)
    expect(list.head.next).toBeNull()
    expect(list.tail.data).toBe(10)
    expect(list.tail.next).toBeNull()

    list.insertFromFront(20)
    expect(list.size()).toBe(2)
    expect(list.head.data).toBe(20)
    expect(list.head.next.data).toBe(10)
    expect(list.head.next.next).toBeNull()
    expect(list.tail.data).toBe(10)
    expect(list.tail.next).toBeNull()

    list.insertFromFront(30)
    expect(list.size()).toBe(3)
    expect(list.head.data).toBe(30)
    expect(list.head.next.data).toBe(20)
    expect(list.head.next.next.data).toBe(10)
    expect(list.head.next.next.next).toBeNull()
    expect(list.tail.data).toBe(10)
    expect(list.tail.next).toBeNull()
  })

  test('should test singly listed list insert operation by position', () => {
    let list = new SinglyLinkedList()
    
    expect(list.insertByPosition(-1, 10)).toBeFalsy()
    expect(list.insertByPosition(10, 10)).toBeFalsy()

    expect(list.insertByPosition(0, 10)).toBeTruthy()
    expect(list.insertByPosition(1, 20)).toBeTruthy()
    expect(list.insertByPosition(2, 30)).toBeTruthy()
    expect(list.insertByPosition(3, 40)).toBeTruthy()

    expect(list.size()).toBe(4)
    expect(list.get(2).data).toBe(30)
    expect(list.get(3).data).toBe(40)
    expect(list.get(3).next).toBeNull()
  })

  test('should test singly listed list delete operation from front', () => {
    let list = new SinglyLinkedList()
    list.insertFromEnd(10)
    list.insertFromEnd(20)
    list.insertFromEnd(30)
    list.insertFromEnd(40)
    list.insertFromEnd(50)
    expect(list.size()).toBe(5)

    list.deleteFromFront()
    expect(list.size()).toBe(4)
    expect(list.head.data).toBe(20)
    expect(list.head.next).not.toBeNull()
    expect(list.tail.data).toBe(50)
    expect(list.tail.next).toBeNull()

    list.deleteFromFront()
    list.deleteFromFront()
    list.deleteFromFront()
    list.deleteFromFront()
    expect(list.size()).toBe(0)
    expect(list.head).toBeNull()
    expect(list.tail).toBeNull()
    
    try {
      list.deleteFromFront()
    } catch(error) {
      expect(error).toBeInstanceOf(Error)
      expect(error).toHaveProperty('message', 'Queue is empty, nothing to delete');
    }
  })

  test('should test singly listed list delete operation by position', () => {
    let list = new SinglyLinkedList()
    list.insertFromEnd(10)
    list.insertFromEnd(20)
    list.insertFromEnd(30)
    list.insertFromEnd(40)
    list.insertFromEnd(50)
    list.insertFromEnd(60)
    list.insertFromEnd(70)
    list.insertFromEnd(80)
    expect(list.size()).toBe(8)

    expect(list.deleteByPosition(-1)).toBeFalsy()
    expect(list.deleteByPosition(10)).toBeFalsy()
    
    const element1 = list.deleteByPosition(0)
    expect(list.size()).toBe(7)
    expect(element1.data).toBe(80)
    expect(element1.next).toBeNull()
    expect(list.tail.data).toBe(70)
    expect(list.tail.next).toBeNull()

    const element2 = list.deleteByPosition(7)
    expect(list.size()).toBe(7)
    expect(list.tail.data).toBe(70)
    expect(list.tail.next).toBeNull()

    const element3 = list.deleteByPosition(3)
    expect(list.size()).toBe(6)
    expect(element3.data).toBe(40)
    expect(element3.next).not.toBeNull()
    expect(list.tail.data).toBe(70)
    expect(list.tail.next).toBeNull()
  })

  test('should test singly listed list get operation', () => {
    let list = new SinglyLinkedList()
    list.insertFromEnd(10)
    list.insertFromEnd(20)
    list.insertFromEnd(30)
    list.insertFromEnd(40)
    list.insertFromEnd(50)
    
    expect(list.get(-1)).toBeNull()
    expect(list.get(10)).toBeNull()

    const getList = list.get(2)
    expect(getList.data).toBe(30)
    expect(getList.next.data).toBe(40)
    expect(getList.next.next.data).toBe(50)
    expect(getList.next.next.next).toBeNull()
  })

  test('should test singly listed list set operation', () => {
    let list = new SinglyLinkedList()
    list.insertFromEnd(10)
    list.insertFromEnd(20)
    list.insertFromEnd(30)
    list.insertFromEnd(40)
    list.insertFromEnd(50)
    
    expect(list.get(-1)).toBeNull()
    expect(list.get(10)).toBeFalsy()

    expect(list.get(2).data).toBe(30)
    list.set(2, 100)
    expect(list.get(2).data).not.toBe(30)
    expect(list.get(2).data).toBe(100)
  })

  // test('should test singly listed list delete operation from end', () => {
  //   let list = new SinglyLinkedList()
  //   list.insertFromEnd(10)
  //   list.insertFromEnd(20)
  //   list.insertFromEnd(30)
  //   list.insertFromEnd(40)
  //   list.insertFromEnd(50)
  //   expect(list.size()).toBe(5)

  //   // list.deleteFromEnd()
  //   // expect(list.size()).toBe(4)
  //   // expect(list.head.data).toBe(20)
  //   // expect(list.head.next).not.toBeNull()
  //   // expect(list.tail.data).toBe(50)
  //   // expect(list.tail.next).toBeNull()

  //   // list.deleteFromEnd()
  //   // list.deleteFromEnd()
  //   // list.deleteFromEnd()
  //   // list.deleteFromEnd()
  //   // expect(list.size()).toBe(0)
  //   // expect(list.head).toBeNull()
  //   // expect(list.tail).toBeNull()
    
  //   // try {
  //   //   list.deleteFromEnd()
  //   // } catch(error) {
  //   //   expect(error).toBeInstanceOf(Error)
  //   //   expect(error).toHaveProperty('message', 'Queue is empty, nothing to delete');
  //   // }
  // })

  test('should test singly linked list clear operation', () => {
    let list = new SinglyLinkedList()
    list.insertFromEnd(10)
    list.insertFromEnd(20)
    expect(list.size()).toBe(2)

    list.clear()
    expect(list.size()).toBe(0)
    expect(list.head).toBeNull()
    expect(list.tail).toBeNull()
  })
})
