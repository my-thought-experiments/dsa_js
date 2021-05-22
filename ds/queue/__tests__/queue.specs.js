const Queue = require('../queue')

describe('DS :: Queue', () => {
  test('should return the position of the new enqueue an element to the queue', () => {
    const q = new Queue()
    q.enqueue(10)
    q.enqueue(20)
    expect(q.size()).toBe(2)

    q.enqueue(30)
    expect(q.size()).toBe(3)
  })

  test('should return the element which is dequeue from the queue', () => {
    const q = new Queue()
    q.enqueue(10) // First In
    q.enqueue(20)
    q.enqueue(30)
    expect(q.dequeue()).toBe(10) // First Out
    expect(q.dequeue()).toBe(20)
    expect(q.dequeue()).toBe(30)
  })

  test('should throw error when we are tried to dequeue an element on empty queue', () => {
    const q = new Queue()
    q.enqueue(10)
    q.enqueue(20)
    q.enqueue(30)
    q.dequeue()
    q.dequeue()
    q.dequeue()
    try {
      q.dequeue()
    } catch (error) {
      expect(error).toBeInstanceOf(Error)
      expect(error).toHaveProperty('message', 'Queue is empty, no element to dequeue');
    }
  })

  test('should return the front element from the queue', () => {
    const q = new Queue()

    q.enqueue(10)
    q.enqueue(20)
    expect(q.front()).toBe(10)

    q.enqueue(30)
    q.enqueue(40)
    q.dequeue()
    expect(q.front()).toBe(20)
  })

  test('should return false is queue is empty', () => {
    const q = new Queue()
    q.enqueue(10)
    q.enqueue(20)
    q.enqueue(30)
    q.dequeue()
    q.dequeue()
    expect(q.isEmpty()).toBeFalsy()
  })

  test('should return true is queue is empty', () => {
    const q = new Queue()
    q.enqueue(10)
    q.enqueue(20)
    q.enqueue(30)
    q.dequeue()
    q.dequeue()
    q.dequeue()
    expect(q.isEmpty()).toBeTruthy()
  })

  test('should return the size of the queue', () => {
    const q = new Queue()
    q.enqueue(10)
    q.enqueue(20)
    q.enqueue(30)
    expect(q.size()).toBe(3)
  })
})
