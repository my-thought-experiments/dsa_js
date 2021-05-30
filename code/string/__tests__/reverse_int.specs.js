const reverse = require('../reverse_int')

describe('Reverse integer', () => {
  test('should use reverse method - solution #1', () => {
    expect(reverse(15, 1)).toBe(51)
    expect(reverse(981, 1)).toBe(189)
    expect(reverse(500, 1)).toBe(5)
    expect(reverse(-15, 1)).toBe(-51)
    expect(reverse(-90, 1)).toBe(-9)
  })

  test('should use reverse method - solution #2', () => {
    expect(reverse(15, 2)).toBe(51)
    expect(reverse(981, 2)).toBe(189)
    expect(reverse(500, 2)).toBe(5)
    expect(reverse(-15, 2)).toBe(-51)
    expect(reverse(-90, 2)).toBe(-9)
  })
})
