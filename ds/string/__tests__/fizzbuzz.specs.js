const fizzbuzz = require('../fizzbuzz')

describe('fizzbuzz string', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });
  
  afterEach(() => {
    console.log.mockRestore();
  });

  test('fizzBuzz function is defined', () => {
    expect(fizzbuzz).toBeDefined();
  });

  test('should use solution #1 - for no 5', () => {
    fizzbuzz(5, 1)
    expect(console.log.mock.calls.length).toEqual(5)
  })

  test('should use solution #1 - for no 20', () => {
    fizzbuzz(20, 1)
    expect(console.log.mock.calls.length).toEqual(20)
  })
})
