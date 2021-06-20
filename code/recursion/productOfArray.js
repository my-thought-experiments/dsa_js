function productOfArray(arr) {
  if (arr.length === 0) {
    return 1
  }
  return arr[0] * productOfArray(arr.splice(1))
}

module.exports = productOfArray
