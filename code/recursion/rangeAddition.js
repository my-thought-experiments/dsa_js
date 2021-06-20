function rangeAddition(n) {
  if (n <= 0) {
    return false
  }
  return n + rangeAddition(n - 1)
}

module.exports = rangeAddition
