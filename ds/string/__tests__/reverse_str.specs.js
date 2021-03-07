const reverse = require('../reverse_str')

test('Reverse string using solution #1 using reverse method', () => {
  expect(reverse('apple', 1)).toBe('elppa')
  expect(reverse('orange', 1)).toBe('egnaro')
})

test('Reverse string using solution #2 using for-loop', () => {
  expect(reverse('apple', 2)).toBe('elppa')
  expect(reverse('orange', 2)).toBe('egnaro')
})

test('Reverse string using solution #3 using reduce method', () => {
  expect(reverse('apple', 3)).toBe('elppa')
  expect(reverse('orange', 3)).toBe('egnaro')
})