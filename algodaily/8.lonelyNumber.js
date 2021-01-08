function lonelyNumber(numbers) {
  // Fill in this method
  const hash = {}

  for (let elem of numbers) {
  hash[elem] ? hash[elem]++ : hash[elem] = 1
  }

  console.log(hash)
  for (let key in hash) {
    if (hash[key] === 1) {
      return key
    }
  }
}

console.log(lonelyNumber([4, 4, 6, 1, 3, 1, 3]))
// 6
