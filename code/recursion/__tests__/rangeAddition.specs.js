const rangeAddition = require('../rangeAddition')

describe('Recursive functions', () => {
  test('should return range addition', () => {
    expect(rangeAddition(6)).toBe(21)
    expect(rangeAddition(10)).toBe(55)
  })
})
