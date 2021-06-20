function collectOddValues(arr) {
  const result = []

  function helper(arr) {
    // base case
    if (arr.length === 0) {
      return false
    }

    if (arr[0] % 2 !== 0) {
      result.push(arr[0])
    }
    helper(arr.slice(1))
  }

  helper(arr)
  return result
}

module.exports = collectOddValues
