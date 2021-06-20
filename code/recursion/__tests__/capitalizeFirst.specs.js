const capitalizeFirst = require('../capitalizeFirst')

describe('Recursive functions', () => {
  test('should return capitalize first array', () => {
    expect(capitalizeFirst(['google', 'microsoft', 'facebook'])).toEqual(expect.arrayContaining(['Google', 'Microsoft', 'Facebook']))
  })
})
