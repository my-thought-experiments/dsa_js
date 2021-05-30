const { Node, Queue } = require('../queueLL')

describe('DS :: Queue using Linked List', () => {
  test('should create new node with correct default reference', () => {
    let element1 = new Node()
    expect(element1.data).toBeNull()
    expect(element1.next).toBeNull()

    let element2 = new Node(10)
    expect(element2.data).toBe(10)
    expect(element2.next).toBeNull()
  })

  test('should add a new node to the queue', () => {
    const q = new Queue()

    expect(q.first).toBeNull()
    expect(q.last).toBeNull()

    q.enqueue(10)
    expect(q.size()).toBe(1)
    expect(q.first.data).toBe(10)
    expect(q.first.next).toBeNull()
    expect(q.last.data).toBe(10)
    expect(q.last.next).toBeNull()
   
    q.enqueue(20)
    q.enqueue(30)
    expect(q.size()).toBe(3)

    expect(q.first.data).toBe(10)
    expect(q.first.next).not.toBeNull()
    expect(q.last.data).toBe(30)
    expect(q.last.next).toBeNull()
  })

  test('should throw error when we are tried to dequeue an element on empty queue', () => {
    const q = new Queue()
    q.enqueue(10)
    q.enqueue(20)
    q.enqueue(30)
    expect(q.size()).toBe(3)

    q.dequeue()
    expect(q.size()).toBe(2)

    q.dequeue()
    expect(q.size()).toBe(1)
    expect(q.first.data).toBe(q.last.data)
    expect(q.last.next).toBeNull()

    q.dequeue()
    try {
      q.dequeue()
    } catch (error) {
      expect(error).toBeInstanceOf(Error)
      expect(error).toHaveProperty('message', 'Queue is empty, nothing to dequeue');
    }
  })

  // test('should return the front element from the queue', () => {
  //   const q = new Queue()

  //   q.enqueue(10)
  //   q.enqueue(20)
  //   expect(q.front()).toBe(10)

  //   q.enqueue(30)
  //   q.enqueue(40)
  //   q.dequeue()
  //   expect(q.front()).toBe(20)
  // })

  // test('should return false is queue is empty', () => {
  //   const q = new Queue()
  //   q.enqueue(10)
  //   q.enqueue(20)
  //   q.enqueue(30)
  //   q.dequeue()
  //   q.dequeue()
  //   expect(q.isEmpty()).toBeFalsy()
  // })

  // test('should return true is queue is empty', () => {
  //   const q = new Queue()
  //   q.enqueue(10)
  //   q.enqueue(20)
  //   q.enqueue(30)
  //   q.dequeue()
  //   q.dequeue()
  //   q.dequeue()
  //   expect(q.isEmpty()).toBeTruthy()
  // })

  // test('should return the size of the queue', () => {
  //   const q = new Queue()
  //   q.enqueue(10)
  //   q.enqueue(20)
  //   q.enqueue(30)
  //   expect(q.size()).toBe(3)
  // })
})
