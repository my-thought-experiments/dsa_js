function stringifyNumbers(obj) {
  if (!obj) {
    return false
  }

  const result = {}

  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      result[key] = obj[key].toString()
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      result[key] = stringifyNumbers(obj[key])
    } else {
      result[key] = obj[key]
    }
  }

  return result
}

module.exports = stringifyNumbers
