const chunk = require('../array_chunk')

describe('chunk array', () => {
  test('should use solution #1', () => {
    expect(chunk([1, 2, 3, 4], 2, 1)).toEqual(expect.arrayContaining([ [ 1, 2 ], [ 3, 4 ] ]))
    expect(chunk([1, 2, 3, 4, 5], 3, 1)).toEqual(expect.arrayContaining([ [ 1, 2, 3 ], [ 4, 5 ] ]))
  })

  test('should use solution #2', () => {
    expect(chunk([1, 2, 3, 4], 2, 2)).toEqual(expect.arrayContaining([ [ 1, 2 ], [ 3, 4 ] ]))
    expect(chunk([1, 2, 3, 4, 5], 3, 2)).toEqual(expect.arrayContaining([ [ 1, 2, 3 ], [ 4, 5 ] ]))
  })
})
