const fibonacci = require('../fibonacci')

describe('Recursive functions', () => {
  test('should use solution #1', () => {
    expect(fibonacci(4, 1)).toBe(3)
    expect(fibonacci(10, 1)).toBe(55)
    expect(fibonacci(28, 1)).toBe(317811)
    expect(fibonacci(35, 1)).toBe(9227465)
  })

  test('should use solution #2', () => {
    expect(fibonacci(4, 2)).toBe(3)
    expect(fibonacci(10, 2)).toBe(55)
    expect(fibonacci(28, 2)).toBe(317811)
    expect(fibonacci(35, 2)).toBe(9227465)
  })
})
