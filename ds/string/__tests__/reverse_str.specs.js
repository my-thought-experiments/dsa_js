const reverse = require('../reverse_str')

describe('Reverse string', () => {
  test('should use reverse method - solution #1', () => {
    expect(reverse('apple', 1)).toBe('elppa')
    expect(reverse('orange', 1)).toBe('egnaro')
  })
  
  test('should use for-loop - solution #2', () => {
    expect(reverse('apple', 2)).toBe('elppa')
    expect(reverse('orange', 2)).toBe('egnaro')
  })
  
  test('should use reduce - solution #3', () => {
    expect(reverse('apple', 3)).toBe('elppa')
    expect(reverse('orange', 3)).toBe('egnaro')
  })
})
