const result = []

function count(num) {
  // Setup base case
  if (num <= 0) {
    return false
  }

  // Just for testing purpose
  result.push(num)

  // Setup different input
  num--
  count(num)

  return result
}

module.exports = count
