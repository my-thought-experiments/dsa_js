function count(num) {
  const result = []

  function helper(num) {
    // Setup base case
    if (num <= 0) {
      return false
    }

    // Just for testing purpose
    result.push(num)

    // Setup different input
    num--
    helper(num)
  }

  helper(num)
  return result
}

module.exports = count
