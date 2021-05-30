/**
 * Give a string, return the chanacter that is most commonly used in the string.
 * 
 * E.g.
 * maxChar('abccccccccd') => c
 * maxChar('apple 121111111') => 1
 * 
 * Notes: Common string question, same logic applies
 * - Most common character in the string
 * - Does string A have the same characters as string B (anagram)?
 * - Does string have any repeated characters in it?
 */

/**
 * Solution #1
 */
function solution_1(str) {
  const charMap = {}
  let max = 0
  let maxChar = ''
  for (let char of str) { // of => iterate string and array
    charMap[char] = charMap[char] + 1 || 1
  }
  
  for (let char in charMap) { // in => iterate object
    if (charMap[char] > max) {
      max = charMap[char]
      maxChar = char
    }
  }
  
  return maxChar
}

function maxChar(str, solutionType) {
  switch(solutionType) {
    case 1:
      return solution_1(str)
  }
}

module.exports = maxChar
