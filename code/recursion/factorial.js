function factorial(num) {
  // Setup base case
  if (num === 1) {
    return 1
  }

  // Setup different input
  return num * factorial(num - 1)
}

module.exports = factorial
