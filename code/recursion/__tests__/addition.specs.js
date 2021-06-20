const addition = require('../addition')

describe('Recursive functions', () => {
  test('should return addition array', () => {
    expect(addition(5)).toBe(15)
    expect(addition(10)).toBe(55)
  })
})
