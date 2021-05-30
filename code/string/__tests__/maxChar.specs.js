const maxChar = require('../maxChar')

describe('maxChar string', () => {
  test('should use solution #1', () => {
    expect(maxChar('Hello There!', 1)).toBe('e')
    expect(maxChar('Apple Google Microsoft', 1)).toBe('o')
  })
})
