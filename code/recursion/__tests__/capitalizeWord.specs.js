const capitalizeWord = require('../capitalizeWord')

describe('Recursive functions', () => {
  test('should return capitalize first array', () => {
    expect(capitalizeWord(['google', 'microsoft', 'facebook'])).toEqual(expect.arrayContaining(['GOOGLE', 'MICROSOFT', 'FACEBOOK']))
  })
})
