function capitalizeFirst(arr) {
  const result = []

  function helper(arr) {
    if (arr.length === 0) {
      return false
    }
    let capsFirstWord = arr[0][0].toUpperCase() + arr[0].substr(1)
    result.push(capsFirstWord)
    helper(arr.splice(1))
  }

  helper(arr)
  return result
}

module.exports = capitalizeFirst
