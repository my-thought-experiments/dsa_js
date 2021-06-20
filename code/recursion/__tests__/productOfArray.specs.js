const productOfArray = require('../productOfArray')

describe('Recursive functions', () => {
  test('should calculate product of give array', () => {
    expect(productOfArray([1, 2, 3])).toBe(6)
    expect(productOfArray([1, 2, 3, 10])).toBe(60)
  })
})
