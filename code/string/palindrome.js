/**
 * Give a string, identify the string is Palindrome string
 * 
 * E.g.
 * palindrome('apple') => false
 * palindrome('asa') => true
 */

/**
 * Solution #1, use reduce
 */
function solution_1(str) {
  const reserved_str = str.split('').reduce((reverse_str, character) => character + reverse_str, '')
  return str === reserved_str
}

/**
 * Solution #2, use every
 * Con: double compare
 */
function solution_2(str) {
  return str
    .split('')
    .every((character, index) => {
      return character === str[str.length - index - 1]
    })
}

function palindrome(str, solutionType) {
  switch(solutionType) {
    case 1:
      return solution_1(str)

    case 2:
      return solution_2(str)
  }
}

module.exports = palindrome
