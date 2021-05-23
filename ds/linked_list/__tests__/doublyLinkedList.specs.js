const { Node, DoublyLinkedList } = require('../doublyLinkedList')

describe('DS :: Linked List :: Doubly Linked List', () => {
  test('should test doubly listed list insert on front operations', () => {
    let list = new DoublyLinkedList()
    expect(list.head).toBeNull()

    list.insert(10)
    expect(list.head.data).toBe(10)
    expect(list.size()).toBe(1)

    list.insert(20)
    expect(list.size()).toBe(2)
    expect(list.getFirstNode().data).toBe(20)
    expect(list.getLastNode().data).toBe(10)
    expect(list.getLastNode().next).toBeNull()

    list.insert(30)
    expect(list.size()).toBe(3)
    expect(list.getFirstNode().data).toBe(30)
    expect(list.getLastNode().data).toBe(10)
    expect(list.getLastNode().next).toBeNull()
  })

  test('should test doubly listed list delete on front operations', () => {
    let list = new DoublyLinkedList()
    list.insert(10)
    list.insert(20)
    list.insert(30)
    list.insert(40)
    list.insert(50)
    expect(list.size()).toBe(5)
    expect(list.getFirstNode().data).toBe(50)
    expect(list.getLastNode().data).toBe(10)
    expect(list.getLastNode().next).toBeNull()

    list.delete(30)
    expect(list.size()).toBe(4)

    list.delete(10)
    expect(list.size()).toBe(3)
    expect(list.getLastNode().data).toBe(20)
    expect(list.getLastNode().next).toBeNull()
  })
})
