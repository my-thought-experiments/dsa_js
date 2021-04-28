/**
 * Check to see if two provided strings are anagrams of each other.
 * One string is an anagram of another if it uses the same char in the same quantity.
 * Only consider char, not spaces or punctuation. Consider capital letters to be the same as lower case
 * 
 * 
 * E.g.
 * anagrams('rail! safety!', 'fairy tales') -> true
 * anagrams('Hi there', 'bye there') -> false
 */

// Helper function to return clean string
function cleanStr(str) {
  return str.replace(/[^\w]/g, '').toLowerCase()
}

// Helper function to build character map
function buildCharacterMap(str) {
  const charMap = {}

  for (let char of cleanStr(str)) {
    charMap[char] = charMap[char] + 1 || 1
  }

  return charMap
}

/**
 * Solution #1
 */
function solution_1(strA, strB) {
  const strACharMap = buildCharacterMap(strA)
  const strBCharMap = buildCharacterMap(strB)

  if (Object.keys(strACharMap).length !== Object.keys(strBCharMap).length) {
    return false
  }

  for (let char in strACharMap) {
    if (strACharMap[char] !== strBCharMap[char]) {
      return false
    }
  }

  return true
}

/**
 * Solution #2
 */
function solution_2(strA, strB) {
  const parsedStrA = cleanStr(strA).split('').sort().join('')
  const parsedStrB = cleanStr(strB).split('').sort().join('')

  if (parsedStrA !== parsedStrB) {
    return false
  }

  return true
}

function anagrams(strA, strB, solutionType) {
  switch(solutionType) {
    case 1:
      return solution_1(strA, strB)

    case 2:
      return solution_2(strA, strB)
  }
}

module.exports = anagrams
