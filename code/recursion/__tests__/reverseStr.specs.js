const reverseStr = require('../reverseStr')

describe('Recursive functions', () => {
  test('should return reverse string', () => {
    expect(reverseStr('hello')).toBe('olleh')
    expect(reverseStr('hello world')).toBe('dlrow olleh')
  })
})
