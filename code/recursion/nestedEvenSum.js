function nestedEvenSum(obj, sum = 0) {
  for (let key in obj) {
    let currentKey = obj[key]
    if (typeof currentKey === 'number' && currentKey % 2 === 0) {
      sum += currentKey
    } else if (typeof currentKey === 'object' && !Array.isArray(currentKey)) {
      sum += nestedEvenSum(currentKey)
    }
  }
  return sum
}

module.exports = nestedEvenSum
