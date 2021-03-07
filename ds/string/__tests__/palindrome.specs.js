const palindrome = require('../palindrome')

describe('Palindrome string', () => {
  test('should use solution #1', () => {
    expect(palindrome('apple', 1)).toBeFalsy()
    expect(palindrome('abba', 1)).toBeTruthy()
  })
  
  test('should use solution #2', () => {
    expect(palindrome('apple', 2)).toBeFalsy()
    expect(palindrome('abba', 2)).toBeTruthy()
  })
})
