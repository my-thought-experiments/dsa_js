const factorial = require('../factorial')

describe('Recursive functions', () => {
  test('should return factorial array', () => {
    expect(factorial(5)).toBe(120)
    expect(factorial(10)).toBe(3628800)
  })
})
