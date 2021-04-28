/**
 * Given an array and chunk size, divide the array into many subarrays where
 * each subarray is of length size
 * 
 * E.g.
 * chunk([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]
 * chunk([1, 2, 3, 4, 5], 3) => [[1, 2, 3], [4, 5]]
 */

/**
 * Solution #1
 */
function solution_1(arr, size) {
  const chunked = []

  for (let element of arr) {
    const last = chunked[chunked.length - 1]

    if (!last || last.length === size) {
      chunked.push([element])
    } else {
      last.push(element)
    }
  }

  return chunked
}

/**
 * Solution #2
 */
function solution_2(arr, size) {
  const chunked = []
  let index = 0

  while (index < arr.length) {
    chunked.push(arr.slice(index, index + size))
    index += size
  }

  return chunked
}

function chunk(arr, size, solutionType) {
  switch(solutionType) {
    case 1:
      return solution_1(arr, size)

    case 2:
      return solution_2(arr, size)
  }
}

module.exports = chunk
