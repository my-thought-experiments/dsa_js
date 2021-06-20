function fibonacciRecursive(n, memo = [0, 1, 1]) {
  if (memo[n] !== undefined) {
    return memo[n]
  }
  // if (n <=2) {
  //   return 1
  // }
  const response = fibonacciRecursive(n-1, memo) + fibonacciRecursive(n-2, memo)
  memo[n] = response
  return response
}

module.exports = fibonacciRecursive
