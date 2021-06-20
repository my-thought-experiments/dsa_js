const count = require('../count')

describe('Recursive functions', () => {
  test('should return count array', () => {
    expect(count(5)).toEqual(expect.arrayContaining([5, 4, 3, 2, 1]))
    expect(count(2)).toEqual(expect.arrayContaining([2, 1]))
  })
})
