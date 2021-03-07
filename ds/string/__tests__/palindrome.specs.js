const palindrome = require('../palindrome')

test('Palindrome string using solution #1', () => {
  expect(palindrome('apple', 1)).toBeFalsy()
  expect(palindrome('abba', 1)).toBeTruthy()
})

test('Palindrome string using solution #2', () => {
  expect(palindrome('apple', 2)).toBeFalsy()
  expect(palindrome('abba', 2)).toBeTruthy()
})
