const { Node, Stack } = require('../stackLL')

describe('Stack > Using Linked List', () => {
  test('should create new node with correct default reference', () => {
    let element1 = new Node()
    expect(element1.data).toBeNull()
    expect(element1.next).toBeNull()

    let element2 = new Node(10)
    expect(element2.data).toBe(10)
    expect(element2.next).toBeNull()
  })

  test('should add a new node to the beginning of the stack', () => {
    const stk = new Stack()

    stk.push(10)
    expect(stk.size()).toBe(1)
    expect(stk.first.data).toBe(10)
    expect(stk.first.next).toBeNull()
    expect(stk.last.data).toBe(10)
    expect(stk.last.next).toBeNull()

    stk.push(20)
    expect(stk.size()).toBe(2)
    expect(stk.first.data).toBe(20)
    expect(stk.first.next.data).toBe(10)
    expect(stk.first.next.next).toBeNull()
    expect(stk.last.data).toBe(10)
    expect(stk.last.next).toBeNull()
  })

  test('should return the element which is popped from the stack', () => {
    const stk = new Stack()
    stk.push(10)
    stk.push(20)
    stk.push(30)
    expect(stk.pop().data).toBe(30)
    expect(stk.pop().data).toBe(20)
    expect(stk.pop().data).toBe(10)
    expect(stk.last).toBeNull() // after above step > first === last

    try {
      stk.pop()
    } catch(error) {
      expect(error).toBeInstanceOf(Error)
      expect(error).toHaveProperty('message', 'Stack is empty, nothing to pop')
    }
  })
})
