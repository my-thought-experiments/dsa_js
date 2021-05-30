const Stack = require('../stack')

describe('DS :: Stack', () => {
  test('should return the position of the newly added an element to the stack', () => {
    const stk = new Stack()
    expect(stk.push(10)).toBe(0)
    expect(stk.push(20)).toBe(1)
    expect(stk.push(30)).toBe(2)
  })

  test('should return the element which is popped from the stack', () => {
    const stk = new Stack()
    stk.push(10)
    stk.push(20)
    stk.push(30)
    expect(stk.pop()).toBe(30)
    expect(stk.pop()).toBe(20)
    expect(stk.pop()).toBe(10)
  })

  test('should throw error when we are tried to pop an element on empty stack', () => {
    const stk = new Stack()
    stk.push(10)
    stk.push(20)
    stk.push(30)
    stk.pop()
    stk.pop()
    stk.pop()
    try {
      stk.pop()
    } catch (error) {
      expect(error).toBeInstanceOf(Error)
      expect(error).toHaveProperty('message', 'Stack is empty, nothing to pop')
    }
  })

  test('should return the top most element from the stack', () => {
    const stk = new Stack()

    stk.push(10)
    stk.push(20)
    expect(stk.peek()).toBe(20)

    stk.push(30)
    stk.push(40)

    expect(stk.peek()).toBe(40)
  })

  test('should return false is stack is empty', () => {
    const stk = new Stack()
    stk.push(10)
    stk.push(20)
    stk.push(30)
    stk.pop()
    stk.pop()
    expect(stk.isEmpty()).toBeFalsy()
  })

  test('should return true is stack is empty', () => {
    const stk = new Stack()
    stk.push(10)
    stk.push(20)
    stk.push(30)
    stk.pop()
    stk.pop()
    stk.pop()
    expect(stk.isEmpty()).toBeTruthy()
  })

  test('should return the size of the stack', () => {
    const stk = new Stack()
    stk.push(10)
    stk.push(20)
    stk.push(30)
    expect(stk.size()).toBe(3)
  })
})
