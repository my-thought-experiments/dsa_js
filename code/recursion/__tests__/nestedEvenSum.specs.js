const nestedEvenSum = require('../nestedEvenSum')

describe('Recursive functions', () => {
  test('should sum of all even number from nested object', () => {
    const sampleObjInput1 = {
      num1: 2,
      num2: 3,
      num3: 2,
      num4: 4,
      moreInfo: {
        num5: 6,
        moreInfo: {
          num6: 5,
          num7: 7,
          num8: 10
        }
      }
    }
    expect(nestedEvenSum(sampleObjInput1)).toBe(24)

    const sampleObjInput2 = {
      moreInfo: {
        num1: 5,
        moreInfo: {
          num2: 7,
          moreInfo: {
            moreInfo: {
              moreInfo: {
                num1: 10,
                num2: 2
              }
            }
          }
        }
      }
    }
    expect(nestedEvenSum(sampleObjInput2)).toBe(12)
  })
})
