const power = require('../power')

describe('Recursive functions', () => {
  test('should return as per Math.pow', () => {
    expect(power(2, 0)).toBe(1)
    expect(power(2, 1)).toBe(2)
    expect(power(2, 2)).toBe(4)
    expect(power(2, 4)).toBe(16)

    expect(power(3, 0)).toBe(1)
    expect(power(3, 1)).toBe(3)
    expect(power(3, 2)).toBe(9)
    expect(power(3, 4)).toBe(81)
  })
})
