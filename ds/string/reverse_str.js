/**
 * Give a string, return a new string with the reversed order of characters
 * 
 * E.g.
 * reverse('apple') => elppa 
 */

/**
 * Solution #1, use built in methods
 */
function solution_1(str) {
  // const arr = str.split('') // Convert string to array
  // arr.reverse() // Apply reverse method on array, to reverse the array
  // return arr.join('') // Apply join method to join the array as string and return it as reverse string
  return str.split('').reverse().join('')
}

/**
 * Solution #2, use for loop
 */
function solution_2(str) {
  let reserve_str = ''
  // for (let i = 0; i < str.length; i++) { ... }
  for (let character of str) { // New form of for loop for simple use case
    reserve_str = character + reserve_str
  }
  return reserve_str
}

/**
 * Solution #3, use reduce
 */
function solution_3(str) {
  return str.split('').reduce((reverse_str, character) => character + reverse_str, '')
}

function reverse(str, solutionType) {
  switch (solutionType) {
    case 1:
      return solution_1(str)

    case 2:
      return solution_2(str)

    case 3:
      return solution_3(str)
  }
}

module.exports = reverse
