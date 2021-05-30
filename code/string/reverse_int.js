/**
 * Give a integer, return a new integer with the reversed order of numbers
 * 
 * E.g.
 * reverse('15') => 51
 * reverse('981') => 189
 * reverse('500') => 5
 * reverse('-15') => -51
 * reverse('-90') => -9
 */

/**
 * Solution #1
 */
function solution_1(int) {
  const reverse_no = parseInt(int.toString().split('').reverse().join(''))
  if (int < 0) {
    return reverse_no * -1
  }
  return reverse_no
}

/**
 * Solution #2
 */
function solution_2(int) {
  const reverse_no = parseInt(int.toString().split('').reverse().join(''))
  return reverse_no * Math.sign(int)
}

function reverse(int, solutionType) {
  switch (solutionType) {
    case 1:
      return solution_1(int)
    case 2:
      return solution_2(int)
  }
}

module.exports = reverse
