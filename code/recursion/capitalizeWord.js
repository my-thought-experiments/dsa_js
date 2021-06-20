function capitalizeWord(arr) {
  const result = []

  function helper(arr) {
    if (arr.length === 0) {
      return false
    }
    let capsWord = arr[0].toUpperCase()
    result.push(capsWord)
    helper(arr.splice(1))
  }

  helper(arr)
  return result
}

module.exports = capitalizeWord
