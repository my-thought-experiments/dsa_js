/**
 * Solution #1, not efficient will grow by O(2^n)
 */
function solution_1(num) {
  if (num <= 2) {
    return 1
  }
  return solution_1(num - 1) + solution_1(num - 2)
}

/**
 * Solution #2
 */
function solution_2(num, memo = [0, 1, 1]) {
  if (memo[num] !== undefined) {
    return memo[num]
  }
  const response = solution_2(num - 1, memo) + solution_2(num - 2, memo)
  memo[num] = response
  return response
}

function fibonacci(num, solutionType) {
  switch(solutionType) {
    case 1:
      return solution_1(num)

    case 2:
      return solution_2(num)
  }
}

module.exports = fibonacci