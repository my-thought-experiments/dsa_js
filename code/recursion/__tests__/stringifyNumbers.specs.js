const stringifyNumbers = require('../stringifyNumbers')

describe('Recursive functions', () => {
  test('should return array of string from given object', () => {
    const sampleObjInput = {
      num1: 5,
      num2: 10,
      test: [],
      moreNums: {
        num3: 15,
        num4: 20,
        val: true,
        moreNums: {
          num5: 25,
          hello: 'world'
        }
      }
    }
    const sampleObjOutput = {
      num1: '5',
      num2: '10',
      test: [],
      moreNums: {
        num3: '15',
        num4: '20',
        val: true,
        moreNums: {
          num5: '25',
          hello: 'world'
        }
      }
    }

    expect(stringifyNumbers()).toBeFalsy()
    expect(stringifyNumbers(sampleObjInput)).toEqual(sampleObjOutput)
  })
})
