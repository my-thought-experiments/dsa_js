function addition(num) {
  // Setup base case
  if (num === 1) {
    return 1
  }

  // Setup different input
  return num + addition(num - 1)
}

module.exports = addition
