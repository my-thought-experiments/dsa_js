const anagrams = require('../anagrams')

describe('anagrams string', () => {
  test('anagrams function with solution #1', () => {
    expect(anagrams('rail! safety!', 'fairy tales', 1)).toBeTruthy()
    expect(anagrams('Hi there', 'bye there', 1)).toBeFalsy()
  });

  test('anagrams function with solution #2', () => {
    expect(anagrams('rail! safety!', 'fairy tales', 2)).toBeTruthy()
    expect(anagrams('Hi there', 'bye there', 2)).toBeFalsy()
  });
})
